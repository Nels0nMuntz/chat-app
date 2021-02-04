import express from 'express'
import bcrypt from 'bcrypt';
import { UserModel } from '../models';
import { createJWToken } from '../utils'
import { ILoginData } from './../utils/jwt/createJWToken';
import { validationResult } from 'express-validator';
import { IUser } from './../models/User';
import { Server } from 'socket.io';

class UserController {

    io: Server

    constructor(io: Server){
        this.io = io
    }

    index(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id)
            .then((doc: IUser) => res.json(doc))
            .catch(() => res.status(404).send('User Not Found'))
    }
    create = (req: express.Request, res: express.Response): void => {

        const postData: {
            email: string,
            firstName: string,
            lastName: string,
            password: string,
        } = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
        };

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(422).json({ message: "Post request data validation ended up with errors", errors: errors.array() });
            return;
        };

        const user = new UserModel(postData);
        user.save()
            .then((doc: IUser) => res.status(200).json({ message: "New user account created successfully", data: doc }))
            .catch(reason => res.status(500).json({ message: "Creating of new user account end up with error", details: reason }))
    }
    delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findByIdAndDelete(id)
            .then((doc: IUser) => { if (doc) return res.json({ message: `User ${doc.firstName} ${doc.lastName} removed` }) })
            .catch((err: any) => res.status(404).json({ massege: "Nor Found", reason: err }))
    }
    login = (req: express.Request, res: express.Response): void => {

        const postData: {
            email: string,
            password: string,
        } = {
            email: req.body.login,
            password: req.body.password,
        };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        };

        UserModel.findOne({ email: postData.email }, (err: any, user: IUser) => {
            if (err || !user) return res.status(404).json({ message: 'User not found' });

            if (bcrypt.compareSync(postData.password, user.password_hash)) {
                const loginData: ILoginData = {
                    email: user.email
                };
                const token = createJWToken(loginData);
                res.status(200).json({ success: true, token })
            } else {
                res.status(401).json({ message: "Validation failed. Given email or password aren't matching." })
            }
        });
    }
    getMe(req: express.Request, res: express.Response) {
        const myEmail = req.decodedToken.email;
        UserModel.findOne({ email: myEmail }, (err: any, user: IUser) => {
            if (err || !user) res.status(404).json({ message: "User not found by provided token property 'email'" });
            res.status(200).json(user)
        });

    }
}

export default UserController;
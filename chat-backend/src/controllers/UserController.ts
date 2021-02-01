import express from 'express'
import bcrypt from 'bcrypt';
import { UserModel } from '../models';
import { createJWToken } from '../utils'
import { ILoginData } from './../utils/jwt/createJWToken';
import { validationResult } from 'express-validator';
import { IUser } from './../models/User';

class UserController {
    index(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id)
            .then((doc: IUser) => res.json(doc))
            .catch(() => res.status(404).send('User Not Found'))
    }
    create(req: express.Request, res: express.Response) {
        const postData = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password,
        };
        const user = new UserModel(postData);
        user.save()
            .then(doc => res.json(doc))
            .catch(reason => res.json(reason))
    }
    delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findByIdAndDelete(id)
            .then((doc: IUser) => { if (doc) return res.json({ message: `User ${doc.fullname} removed` }) })
            .catch((err: any) => res.status(404).json({ massege: "Nor Found", reason: err }))
    }
    login(req: express.Request, res: express.Response) {
        const postData: {
            email: string,
            password: string,
        } = {
            email: req.body.login,
            password: req.body.password,
        };
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        };

        UserModel.findOne({ email: postData.email }, (err: any, user: IUser) => {
            if (err || !user) return res.status(404).json({ message: 'User not found' });
            
            if (bcrypt.compareSync(postData.password, user.confirm_hash)) {
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
}

export default UserController;
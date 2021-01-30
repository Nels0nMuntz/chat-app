import { json } from 'body-parser';
import express from 'express'
import { UserModel } from '../models';
import { createJWToken } from '../utils/jwt'
import { ILoginData } from './../utils/jwt/createJWToken';

class UserController {
    index(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id)
            .then(user => res.json(user))
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
            .then(user => { if (user) return res.json({ message: `User ${user.fullname} removed` }) })
            .catch(err => res.status(404).json({ massege: "Nor Found", reason: err }))
    }
    login(req: express.Request, res: express.Response) {
        const postData: {
            email: string,
            password: string,
        } = {
            email: req.body.login,
            password: req.body.password,
        };        
        UserModel.findOne({ email: postData.email }, (err: any, user: any) => {
            if (err) return res.status(404).json({ message: 'User not found' });
            if (user.password === postData.password) {
                const loginData: ILoginData = {
                    email: user.email
                };
                const token = createJWToken(loginData);
                res.status(200).json({ success: true, token })
            } else {
                res.status(401).json({ message: "Validation failed. Given email and password aren't matching." })
            }
        });
    }
}

export default UserController;
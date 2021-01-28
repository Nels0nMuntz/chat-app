import express from 'express'
import { UserModel } from '../schemas';

class UserController {
    index(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        UserModel.findById(id)
            .then(user => res.json(user))
            .catch(err => res.status(404).send('User Not Found'))
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
}

export default UserController;
import express from 'express'
import { DialogModel, UserModel } from '../models';
import { IDialog } from '../models/Dialog';
import { IUser } from '../models/User';

class DialogController {
    async index(req: express.Request, res: express.Response) {

        const userEmail: string = req.decodedToken.email;

        UserModel.findOne({ email: userEmail }, "_id", null, (err: any, doc: IUser | null) => {
            if(err || !doc) res.status(404).json({ message: "Getting list of dialogs faild. User not found" });
            const id = doc?._id
            DialogModel.find()
                .or([{ author: id }, { partner: id }])
                .populate(['author', 'partner', 'lastMessage'])
                .exec((err: any, dialogs: IDialog[]) => {
                    if(err || !dialogs) res.status(404).json({ message: "Dialogs not found", details: err })
                    res.status(200).json(dialogs)
                })
        })
    }
    create(req: express.Request, res: express.Response) {
        const postData = {
            author: req.body.author,
            partner: req.body.partner,
        };
        const dialog = new DialogModel(postData);
        dialog.save()
            .then(dialog => res.status(200).json(dialog))
            .catch(err => res.status(404).json({ message: 'Not found', error: err }))
    }
    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        DialogModel.findByIdAndRemove(id)
            .then((dialog: IDialog) => { if (dialog) res.status(200).json({ message: "Dialog removed" }) })
            .catch((err: any) => res.status(404).json({error: err}))
    }
};

export default DialogController; 
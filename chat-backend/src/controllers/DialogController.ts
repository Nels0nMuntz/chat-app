import express from 'express'
import { DialogModel, MessageModel, UserModel } from '../models';
import { IDialog } from '../models/Dialog';
import { IUser } from '../models/User';
import { Server } from 'socket.io';

class DialogController {

    io: Server;

    constructor(io: Server){
        this.io = io;
    }

    async index(req: express.Request, res: express.Response) {

        const userEmail: string = req.decodedToken.email;

        UserModel.findOne({ email: userEmail }, "_id", null, (err: any, doc: IUser | null) => {
            if (err || !doc) res.status(404).json({ message: "Getting list of dialogs faild. User not found" });
            const id = doc?._id
            DialogModel.find({}, '-__v')
                .or([{ author: id }, { partner: id }])
                .populate('author', ['_id', 'firstName', 'lastName', 'last_seen', 'avatar'])
                .populate('partner', ['_id', 'firstName', 'lastName', 'last_seen', 'avatar'])
                .populate('lastMessage', ['_id', 'read', 'text'])
                .exec((err: any, dialogs: IDialog[]) => {
                    if (err || !dialogs) res.status(404).json({ message: "Dialogs not found", details: err })
                    res.status(200).json(dialogs)
                })
        })
    }
    create(req: express.Request, res: express.Response) {
        const postData = {
            author: req.body.author,
            partner: req.body.partner,
        };

        DialogModel.findOne({
            author: postData.author,
            partner: postData.partner
        },
            (err: any, doc: IDialog) => {
                if (err) return res.status(500).json({ message: "Internal server error", details: err });
                if (doc) return res.status(403).json({ message: "Dialog already exists" });

                const dialog = new DialogModel(postData);
                dialog.save()
                    .then(dialog => {
                        const message = new MessageModel({
                            text: req.body.text,
                            dialogId: dialog._id,
                            createdBy: req.body.createdBy
                        });

                        message.save()
                            .then(() => {
                                DialogModel.findByIdAndUpdate(dialog._id, {lastMessage: message._id})
                                    .then(() => {                                        
                                        this.io.emit('SERVER:DIALOG_CRETED', dialog);
                                        res.status(200).json({ message: "New dialog created", dialog });
                                    })
                                    .catch((err: any) => res.status(404).json({ message: "Dialog not found for uptading last message", details: err })) 
                            })
                            .catch(err => res.status(500).json({ message: 'Internal server error. New message not created', error: err }))
                    })
                    .catch(err => res.status(500).json({ message: 'Internal server error. New dialog not created', error: err }))
            })



    }
    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        DialogModel.findByIdAndRemove(id)
            .then((dialog: IDialog) => { if (dialog) res.status(200).json({ message: "Dialog removed" }) })
            .catch((err: any) => res.status(404).json({ error: err }))
    }
};

export default DialogController; 
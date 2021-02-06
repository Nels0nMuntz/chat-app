import express from 'express'
import { MessageModel, DialogModel } from '../models';

class MessageController {
    index = async (req: express.Request, res: express.Response) => {
        const dialogId: any = req.query.dialog;
        try {
            if (typeof dialogId !== 'string') throw new TypeError("Type of query string parameter 'dialog' should be 'string' but got other");
            let dialog = await MessageModel.find({ dialog: dialogId }).populate(["dialog"]);
            res.status(200).json(dialog)
        } catch (err) {
            let error: {
                message: string,
                reason: object,
            } = {
                message: "",
                reason: err
            };
            if (err.name === "TypeError") {
                error.message = err.message;
            } else {
                error.message = 'Message not found';
            };
            error.reason = err;
            res.status(404).json(error)
        }
    }
    create = (req: express.Request, res: express.Response) => {

        const postData: {
            text: string
            dialogId: string
        } = {
            text: req.body.text,
            dialogId: req.body.dialogId,
        };

        const message = new MessageModel(postData);
        message.save()
            .then(message => {
                DialogModel.findOneAndUpdate(
                    { _id: postData.dialogId },
                    { lastMessage: message.id },
                    { upsert: true },
                    (err: any) => err && res.status(500).json({ message: "Updating DialogModel property 'lastMessage' faild. New message entity not created", details: err })
                )
                res.status(200).json(message)
            })
            .catch(err => res.status(500).json({ message: 'Message not created', error: err }))
    }
    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        MessageModel.findByIdAndRemove({ _id: id })
            .then(() => res.status(200).json({ message: "Messasge removed" }))
            .catch((err: any) => res.status(404).json({ message: "Message not found", reason: err }))
    }
};

export default MessageController;
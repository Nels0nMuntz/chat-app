import express from 'express'
import { DialogModel } from '../models';
import { Schema } from 'mongoose';

class DialogController {
    // index(req: express.Request, res: express.Response) {
    //     const authorId: string = req.params.id;
    //     DialogModel.find({ author: authorId }, (err, dialogs) => {

    //     })
    // }
    index(req: express.Request, res: express.Response) {
        const authorId = req.params.id;

        DialogModel.find({ author: authorId })
            .populate(["author", "partner"])
            .exec(function (err, dialogs) {
                console.log(err);
                if (err) {
                    return res.status(404).json({
                        message: "Dialogs not found"
                    });
                }
                return res.json(dialogs);
            });
    }
};

export default DialogController;
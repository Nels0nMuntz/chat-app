import express from 'express'
import { DialogModel } from '../models';

class DialogController {
    async index(req: express.Request, res: express.Response) {
        const id = req.params.id;
        try {
            let dialog = await DialogModel.findOne({ author: id }).populate(["author", "partner"]);
            res.status(200).json(dialog)
        } catch (err) {
            res.status(404).json({ message: 'Dialog not found', reason: err })
        }
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
            .then(dialog => { if (dialog) res.status(200).json({ message: "Dialog removed" }) })
            .catch(err => res.status(404).json({error: err}))
    }
};

export default DialogController; 
import express from "express";
import { UserModel } from "../models";

const updateLastSeen = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    UserModel.findByIdAndUpdate({ _id: '60120bd321b79c21d854f852' }, { last_seen: new Date() })
        .catch(err => res.status(404).json({ message: "User not found", reason: err}));
    next();
};

export default updateLastSeen;
import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document{
    text: string
    dialogId: string
    createdBy: string
    read: boolean
};

const MessageSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        dialogId: {
            type: Schema.Types.ObjectId,
            ref: "Dialog",
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        read: {
            type: Boolean,
            default: false,
        },
    },
    {
      timestamps: true
    }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
import mongoose, { Document, Schema } from 'mongoose';

interface IMessage extends Document{
    text: string;
    dialog: string;
    unread: boolean;
};

const MessageSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        dialog: {
            type: Schema.Types.ObjectId,
            ref: "Dialog",
            required: true,
        },
        unread: {
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
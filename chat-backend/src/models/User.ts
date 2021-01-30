import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
export interface IUser extends Document{
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    confirm_hash?: string;
    avatar?: string;
    last_seen?: Date;
}

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: 'Email address is required',
            validate: [validator.isEmail, 'Invalid email'],
            index: { unique: true }
        },
        fullname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        confirmed: {
            type: Boolean,
            default: false
        },
        confirm_hash: String,
        avatar: String,
        last_seen: {
            type: Date,
            default: new Date(),
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
import { generateHash } from '../utils';
export interface IUser extends Document{
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    confirm_hash: string;
    avatar?: string;
    last_seen?: Date;
};

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
        confirm_hash: {
            type: String,
            default: ''
        },
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

UserSchema.pre<IUser>('save', function(next) {
    const user: IUser = this;
    if(!user.isModified('')) return next();
    generateHash(user.password)
        .then(hash => {
            user.confirm_hash = String(hash);
            next();
        })
        .catch(err => next(err))
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
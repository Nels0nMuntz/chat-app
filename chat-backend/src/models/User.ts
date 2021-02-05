import mongoose, { Schema, Document } from 'mongoose';
import validator from 'validator';
import { generateHash } from '../utils';
export interface IUser extends Document{
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    password_hash: string,
    confirmed: boolean;
    confirm_hash: string;
    avatar?: string;
    last_seen?: Date;
};

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        password_hash: {
            type: String,
        },
        confirmed: {
            type: Boolean,
            default: false,
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

UserSchema.pre<IUser>('save', function(next) {
    const user: IUser = this;
    if(!user.isModified('')) return next();
    generateHash(user.password)
        .then(hash => {
            user.password_hash = String(hash);
        })
        .then(() => {
            generateHash(user.email)
            .then(confirm_hash => {
                user.confirm_hash = String(confirm_hash);
                next();
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
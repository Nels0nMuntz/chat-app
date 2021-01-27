import mongoose from 'mongoose';
import isEmail from 'validator'

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: 'Email address is required',
            validate: [isEmail, 'Invalid email']
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
        last_seen: Date
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

export default User;
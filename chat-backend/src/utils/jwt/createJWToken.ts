import jwt from 'jsonwebtoken';

export interface ILoginData {
    email: string,
}

const createJWToken = (user: ILoginData): string => {
    const token = jwt.sign(
        user,
        process.env.JWT_SECRET || "",
        {
            expiresIn: process.env.JWT_MAX_AGE,
            algorithm: "HS256",
        }
    );
    return token;
};

export default createJWToken;
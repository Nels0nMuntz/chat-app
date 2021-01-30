import jwt, { VerifyErrors } from 'jsonwebtoken';
import { IUser } from '../../models/User'

export interface IDecodedToken {
    email: string,
    iat: number,
    exp: number
};

const verifyJWTToken = (token: string): Promise<IDecodedToken> => {
    return new Promise(
        (
            resolve: (decodedToken: IDecodedToken) => void,
            reject: (err: VerifyErrors) => void
        ) => {
            jwt.verify(token, process.env.JWT_SECRET || "", (err: any, decodedTocen) => {
                if (err || !decodedTocen) return reject(err);                
                resolve(decodedTocen as IDecodedToken);
            })
        })
};

export default verifyJWTToken;
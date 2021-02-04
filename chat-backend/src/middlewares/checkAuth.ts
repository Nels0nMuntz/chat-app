import express from 'express';
import { verifyJWTToken } from '../utils';

const checkAuth = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    if (req.path === '/user/signin' || req.path === '/user/signup') return next();
        
    const token = req.headers.token;
    if(typeof token === 'string'){
        verifyJWTToken(token)
            .then(decodedToken => {
                req.decodedToken = decodedToken;
                next();
            })
            .catch(err => res.status(403).json({message: "Invalid auth token provided", reason: err, date: new Date()}))
    }else{
        res.status(404).json({message: "Provided token should by a string"})
    }    
};

export default checkAuth;
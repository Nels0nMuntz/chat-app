import { IDecodedToken } from "../../src/utils/jwt/verifyJWTToken";

declare global{
    namespace Express {
        interface Request {
            decodedToken: IDecodedToken
        }
    }
}
import { SetIsAuthAction } from "./types";

export const setIsAuth = (value: boolean): SetIsAuthAction => ({ type: "SET_IS_AUTH", payload: value });
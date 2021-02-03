import { SetDataAction } from "./types";

export const setData = ({token}: { token: string }): SetDataAction => {
    return {
        type: "SET_DATA",
        payload: { token }
    }
};
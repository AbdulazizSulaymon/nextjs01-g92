import { getUsers } from "../../api"
import { dispatch } from "../store";
import { SET_USERS } from "../types";

export const setUsers = async () => {
    const res = await getUsers();
    if (res.success) {
        dispatch({ type: SET_USERS, payload: res.data });
    }
    else {
        dispatch({ type: SET_USERS, payload: [] });
    }
}
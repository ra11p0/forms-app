import { SET_FIELDS } from "../../Constraints/actionTypes";
import { store } from "../store";
export default (fields) => {
    store.dispatch({ type: SET_FIELDS, payload: fields });
};

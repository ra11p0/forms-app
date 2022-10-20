import { SET_ANSWER } from "../../Constraints/actionTypes";
import ReduxGetAnswers from "../ReduxGet/ReduxGetAnswers";
import { store } from "../store";
export default (field) => {
    var _a;
    if (!field)
        return;
    const fields = (_a = ReduxGetAnswers(store.getState())) !== null && _a !== void 0 ? _a : [];
    const index = fields.indexOf(fields.find(f => f.uuid == field.uuid));
    store.dispatch({ type: SET_ANSWER, payload: { field: Object.assign(Object.assign({}, field), { onBlur: undefined }), index } });
};

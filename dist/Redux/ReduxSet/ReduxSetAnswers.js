import ReduxSetAnswer from "./ReduxSetAnswer";
export default (fields) => {
    /*store.dispatch({
        type: SET_ANSWERS, payload: fields.map(field => ({ ...field, onBlur: undefined }))
    })*/
    fields.forEach(field => ReduxSetAnswer(field));
};

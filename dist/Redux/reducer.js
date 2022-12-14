import { combineReducers } from 'redux';
import { SET_ANSWER, SET_ANSWERS, SET_APPLICATION_LANGUAGE, SET_CURRENTLY_EDITED_FIELD, SET_FIELDS } from '../Constraints/actionTypes';
const defaultState = {
    fields: [],
    currentlyEdited: ""
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FIELDS:
            return { ...state, fields: action.payload };
        case SET_ANSWERS:
            return { ...state, answers: action.payload };
        case SET_ANSWER:
            return {
                ...state,
                answers: state.answers ? [
                    ...state.answers.filter((_, i) => i < action.payload.index),
                    { ...state.answers[action.payload.index], ...action.payload.field },
                    ...state.answers.filter((_, i) => i > action.payload.index),
                ] : [action.payload.field]
            };
        case SET_CURRENTLY_EDITED_FIELD:
            return { ...state, currentlyEdited: action.payload };
        case SET_APPLICATION_LANGUAGE:
            return {
                ...state,
                applicationLanguage: action.payload
            };
        default:
            return state;
    }
};
export default combineReducers({
    common: reducer
});

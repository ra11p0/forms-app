import { store } from "../store";
export default (state = store.getState()) => {
    return state.common.applicationLanguage;
};

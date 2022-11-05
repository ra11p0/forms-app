import { store } from "../store";

export default (state: any = store.getState()): string => {
    return state.common.applicationLanguage;
};

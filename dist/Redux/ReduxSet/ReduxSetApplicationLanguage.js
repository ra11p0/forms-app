import moment from "moment";
import { registerLocale } from "react-datepicker";
import { SET_APPLICATION_LANGUAGE } from "../../Constraints/actionTypes";
import i18n from "../../i18n/config";
import { store } from "../store";
import pl from "date-fns/locale/pl";
import enUS from "date-fns/locale/en-US";
export default (language) => {
    store.dispatch({ type: SET_APPLICATION_LANGUAGE, payload: language });
    i18n.changeLanguage(language);
    switch (language) {
        case 'pl':
            moment.locale('pl');
            registerLocale("pl", pl);
            break;
        case 'en':
            moment.locale('en');
            registerLocale("en", enUS);
            break;
    }
};

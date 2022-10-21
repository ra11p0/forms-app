import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Loading from "./Common/Loading";
import "../i18n/config";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import Editor from "./Editor/Editor";
import ApplicationModes from "../Constraints/ApplicationModes";
import ReduxSetFields from "../Redux/ReduxSet/ReduxSetFields";
import Filler from "./Filler/Filler";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
function Forms(props) {
    useEffect(() => {
        var _a;
        ReduxSetFields((_a = props.fields) !== null && _a !== void 0 ? _a : []);
    }, [props.fields]);
    return (_jsx(Provider, Object.assign({ store: store }, { children: _jsx("div", Object.assign({ className: "w-100" }, { children: _jsx(I18nextProvider, Object.assign({ i18n: i18n }, { children: _jsx(Loading, Object.assign({ isReady: true }, { children: _jsxs(_Fragment, { children: [props.mode == ApplicationModes.Edit &&
                                _jsx(Editor, { onSubmit: props.onSubmit, onDiscard: props.onDiscard }), (props.mode == ApplicationModes.Fill || props.mode == ApplicationModes.Preview) &&
                                _jsx(Filler, { onSubmit: props.onSubmit, mode: props.mode })] }) })) })) })) })));
}
export default Forms;

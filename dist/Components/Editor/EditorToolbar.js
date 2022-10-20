import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function EditorToolbar(props) {
    const { t } = useTranslation();
    return (_jsx("div", Object.assign({ className: "d-flex justify-content-center m-2 p-2" }, { children: _jsxs(ButtonGroup, { children: [_jsx(Button, Object.assign({ onClick: props.onAddNewFieldHandler }, { children: t("addNewField") })), _jsx(Button, Object.assign({ onClick: props.onDiscardHandler, variant: "danger" }, { children: t("discard") })), _jsx(Button, Object.assign({ onClick: props.onConfirmHandler, variant: "success" }, { children: t("confirm") }))] }) })));
}
export default EditorToolbar;

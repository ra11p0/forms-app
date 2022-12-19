import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function EditorToolbar(props) {
    const { t } = useTranslation();
    return (_jsx("div", { className: "d-flex justify-content-center m-2 p-2", children: _jsxs(ButtonGroup, { children: [_jsx(Button, { onClick: props.onAddNewFieldHandler, children: _jsx(FontAwesomeIcon, { icon: faPlus }) }), _jsx(Button, { onClick: props.onDiscardHandler, variant: "danger", children: _jsx(FontAwesomeIcon, { icon: faXmark }) }), _jsx(Button, { onClick: props.onConfirmHandler, variant: "success", children: _jsx(FontAwesomeIcon, { icon: faCheck }) })] }) }));
}
export default EditorToolbar;

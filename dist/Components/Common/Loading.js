import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function Loading(props) {
    const { t } = useTranslation();
    return (_jsx(_Fragment, { children: props.isReady ? (props.children) : (_jsx("div", { className: "d-flex justify-content-center", children: _jsx(Spinner, { animation: "border", role: "status", className: "m-2 p-2", children: _jsx("span", { className: "visually-hidden", children: t("loading") }) }) })) }));
}
export default Loading;

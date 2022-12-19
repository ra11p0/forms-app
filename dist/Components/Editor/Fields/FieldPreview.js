import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { faEdit, faHandDots, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FieldTypes from "../../../Constraints/FieldTypes";
import Checkbox from "./FieldTypes/Checkbox";
import Date from "./FieldTypes/Date";
import Email from "./FieldTypes/Email";
import LongText from "./FieldTypes/LongText";
import ShortText from "./FieldTypes/ShortText";
function FieldPreview(props) {
    const { t } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsx(Row, { className: ((props.isHovered ?? false) ? '' : 'invisible') + ' position-static', children: _jsxs(Col, { className: "d-flex justify-content-between", children: [_jsx(FontAwesomeIcon, { icon: faHandDots }), _jsxs(ButtonGroup, { children: [_jsx(Button, { variant: "danger", onClick: props.onRemoveFieldHandler, children: _jsx(FontAwesomeIcon, { icon: faTrash }) }), _jsx(Button, { onClick: props.onEditFieldHandler, children: _jsx(FontAwesomeIcon, { icon: faEdit }) })] })] }) }), _jsx(Row, { children: _jsxs(Col, { children: [_jsx(Row, { children: _jsx(Col, { children: _jsx(Form.Label, { children: props.field.name }) }) }), props.field.description &&
                            _jsx(Row, { children: _jsx(Col, { children: _jsx(Form.Text, { children: props.field.description }) }) }), (() => {
                            switch (props.field.type) {
                                case FieldTypes.ShortText:
                                    return _jsx(ShortText, { ...props.field });
                                case FieldTypes.LongText:
                                    return _jsx(LongText, { ...props.field });
                                case FieldTypes.Checkbox:
                                    return _jsx(Checkbox, { ...props.field });
                                case FieldTypes.Date:
                                    return _jsx(Date, { ...props.field });
                                case FieldTypes.Email:
                                    return _jsx(Email, { ...props.field });
                                default:
                                    return null;
                            }
                        })()] }) })] }));
}
export default FieldPreview;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Form, FormLabel, Row } from 'react-bootstrap';
import FieldTypes from '../../../Constraints/FieldTypes';
import Checkbox from '../../Editor/Fields/FieldTypes/Checkbox';
import DateField from '../../Editor/Fields/FieldTypes/Date';
import Email from '../../Editor/Fields/FieldTypes/Email';
import LongText from '../../Editor/Fields/FieldTypes/LongText';
import ShortText from '../../Editor/Fields/FieldTypes/ShortText';
function Field(props) {
    return (_jsx(Row, { className: 'm-2 p-2', children: _jsxs(Col, { children: [_jsx(Row, { children: _jsx(Col, { children: _jsx(FormLabel, { children: props.name }) }) }), props.description &&
                    _jsx(Row, { children: _jsx(Col, { children: _jsx(Form.Text, { children: props.description }) }) }), _jsx(Row, { children: _jsx(Col, { children: (() => {
                            switch (props.type) {
                                case FieldTypes.Checkbox:
                                    return _jsx(Checkbox, { ...props });
                                case FieldTypes.Date:
                                    return _jsx(DateField, { ...props });
                                case FieldTypes.Email:
                                    return _jsx(Email, { ...props });
                                case FieldTypes.LongText:
                                    return _jsx(LongText, { ...props });
                                case FieldTypes.ShortText:
                                    return _jsx(ShortText, { ...props });
                                default:
                                    return _jsx(_Fragment, {});
                            }
                        })() }) })] }) }));
}
export default Field;

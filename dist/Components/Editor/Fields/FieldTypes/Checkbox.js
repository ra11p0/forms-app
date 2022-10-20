import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ValidationTypes from "../../../../Constraints/ValidationTypes";
function Checkbox(props) {
    var _a, _b, _c;
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            values: (_a = props.value) !== null && _a !== void 0 ? _a : ((_b = props.labels) !== null && _b !== void 0 ? _b : []).map(() => false)
        },
        validate: (values) => {
            var _a;
            const errors = {};
            const vals = (_a = values.values) !== null && _a !== void 0 ? _a : [];
            if (props.isRequired && !vals.find(e => e))
                errors.values = t('atLeastOneRequired');
            return errors;
        },
        onSubmit: () => { }
    });
    useEffect(() => {
        if (props.validationKey == ValidationTypes.InitialValidate) {
            formik.validateForm().then((errors) => {
                if (props.onBlur)
                    props.onBlur({ target: props, updatedValue: formik.values.values, errors });
            });
        }
        if (props.validationKey == ValidationTypes.SubmitValidate) {
            formik.submitForm();
        }
    }, [props.validationKey]);
    return (_jsxs(_Fragment, { children: [((_c = props.labels) !== null && _c !== void 0 ? _c : []).map((_, i) => {
                var _a;
                return _jsx(Row, { children: _jsx(Col, { children: _jsx(Form.Check, { type: "checkbox", checked: (_a = formik.values.values[i]) !== null && _a !== void 0 ? _a : false, onChange: (newValue) => {
                                var _a;
                                const newValues = ((_a = props.distinctValues) !== null && _a !== void 0 ? _a : false) ? formik.values.values.map(() => false) : formik.values.values.slice();
                                newValues[i] = newValue.target.checked;
                                formik.handleChange({ target: { value: newValues, id: 'values', name: 'values' } });
                            }, label: props.labels[i], isInvalid: formik.errors.values != undefined && formik.touched.values, onBlur: () => { if (props.onBlur)
                                props.onBlur({ target: props, updatedValue: formik.values.values, errors: formik.errors }); } }, i) }) }, i);
            }), _jsx(Form.Control.Feedback, Object.assign({ type: "invalid", className: "d-inline" }, { children: formik.touched.values && formik.errors.values }))] }));
}
export default Checkbox;

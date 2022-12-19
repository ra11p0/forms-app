import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ValidationTypes from "../../../../Constraints/ValidationTypes";
function Checkbox(props) {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            values: props.value ?? (props.labels ?? []).map(() => false)
        },
        validate: (values) => {
            const errors = {};
            const vals = values.values ?? [];
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
    return (_jsxs(_Fragment, { children: [(props.labels ?? []).map((_, i) => _jsx(Row, { children: _jsx(Col, { children: _jsx(Form.Check, { type: "checkbox", checked: formik.values.values[i] ?? false, onChange: (newValue) => {
                            const newValues = (props.distinctValues ?? false) ? formik.values.values.map(() => false) : formik.values.values.slice();
                            newValues[i] = newValue.target.checked;
                            formik.handleChange({ target: { value: newValues, id: 'values', name: 'values' } });
                        }, label: props.labels[i], isInvalid: formik.errors.values != undefined && formik.touched.values, onBlur: () => { if (props.onBlur)
                            props.onBlur({ target: props, updatedValue: formik.values.values, errors: formik.errors }); } }, i) }) }, i)), _jsx(Form.Control.Feedback, { type: "invalid", className: "d-inline", children: formik.touched.values && formik.errors.values })] }));
}
export default Checkbox;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as Yup from 'yup';
import ValidationTypes from "../../../../Constraints/ValidationTypes";
function ShortText(props) {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            value: props.value ?? ''
        },
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            value: (() => {
                let schema = Yup.string();
                if (props.isRequired)
                    schema = schema.required(t('fieldRequired'));
                return schema;
            })()
        }),
        onSubmit: () => { }
    });
    useEffect(() => {
        if (props.validationKey == ValidationTypes.InitialValidate) {
            formik.validateForm().then((errors) => {
                if (props.onBlur)
                    props.onBlur({ target: props, updatedValue: formik.values.value, errors });
            });
        }
        else if (props.validationKey == ValidationTypes.SubmitValidate) {
            formik.submitForm();
        }
    }, [props.validationKey]);
    return (_jsxs(_Fragment, { children: [_jsx(Form.Control, { value: formik.values.value, name: 'value', id: 'value', onChange: (evt) => {
                    formik.handleChange(evt);
                }, onBlur: () => {
                    if (props.onBlur)
                        props.onBlur({ target: props, updatedValue: formik.values.value, errors: formik.errors });
                }, isInvalid: formik.errors.value != undefined && formik.touched.value }), _jsx(Form.Control.Feedback, { type: "invalid", children: formik.touched.value && formik.errors.value })] }));
}
export default ShortText;

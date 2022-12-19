import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import ValidationTypes from "../../../../Constraints/ValidationTypes";
function Email(props) {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            email: props.value ?? ""
        },
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            email: (() => {
                let schema = Yup.string().email(t('wrongEmailValue'));
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
                    props.onBlur({ target: props, updatedValue: formik.values.email, errors });
            });
        }
        else if (props.validationKey == ValidationTypes.SubmitValidate) {
            formik.submitForm();
        }
    }, [props.validationKey]);
    return (_jsxs(_Fragment, { children: [_jsx(Form.Control, { name: 'email', id: 'email', value: formik.values.email, onChange: (evt) => {
                    formik.handleChange(evt);
                }, onBlur: () => {
                    if (props.onBlur)
                        props.onBlur({ target: props, updatedValue: formik.values.email, errors: formik.errors });
                }, isInvalid: formik.errors.email != undefined && formik.touched.email }), _jsx(Form.Control.Feedback, { type: "invalid", children: formik.touched.email && formik.errors.email })] }));
}
export default Email;

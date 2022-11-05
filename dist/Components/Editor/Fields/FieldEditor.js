import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormik } from "formik";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ReactSelect from "react-select";
import FieldTypes from "../../../Constraints/FieldTypes";
import ReduxSetField from "../../../Redux/ReduxSet/ReduxSetField";
import * as Yup from "yup";
import DynamicTextListInput from "../../Common/DynamicTextListInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function FieldEditor(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { t } = useTranslation();
    const types = Object.values(FieldTypes).map((value) => ({ value, label: t(value.toString()) }));
    const formik = useFormik({
        initialValues: {
            name: props.field.name,
            type: (_a = props.field.type) !== null && _a !== void 0 ? _a : FieldTypes.ShortText,
            description: (_b = props.field.description) !== null && _b !== void 0 ? _b : "",
            labels: (_c = props.field.labels) !== null && _c !== void 0 ? _c : [''],
            useDescription: props.field.description != null && props.field.description != '',
            distinctValues: (_d = props.field.distinctValues) !== null && _d !== void 0 ? _d : false,
            forbidPast: (_e = props.field.forbidPast) !== null && _e !== void 0 ? _e : false,
            forbidFuture: (_f = props.field.forbidFuture) !== null && _f !== void 0 ? _f : false,
            isRequired: (_g = props.field.isRequired) !== null && _g !== void 0 ? _g : false
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(t("fieldNameIsRequired")),
            description: Yup.string(),
        }),
        onSubmit(values) {
            ReduxSetField(Object.assign(Object.assign({}, props.field), { name: values.name, type: values.type, labels: values.labels, description: values.useDescription ? values.description : '', distinctValues: values.distinctValues, forbidPast: values.forbidPast, forbidFuture: values.forbidFuture, isRequired: values.isRequired }));
            props.onFinishEditingHandler();
        },
    });
    return (_jsxs(Form, Object.assign({ onSubmit: formik.handleSubmit, className: "border rounded-3 shadow" }, { children: [_jsxs(Row, Object.assign({ className: "m-2 p-2" }, { children: [_jsxs(Col, { children: [_jsx(Form.Label, Object.assign({ htmlFor: "name" }, { children: t("fieldName") })), _jsx(Form.Control, { type: "text", id: "name", name: "name", value: formik.values.name, onChange: formik.handleChange, isInvalid: formik.touched.name && formik.errors.name !== undefined }), _jsx(Form.Control.Feedback, Object.assign({ type: "invalid" }, { children: formik.touched.name && formik.errors.name }))] }), _jsxs(Col, { children: [_jsx(Form.Label, { children: t("fieldType") }), _jsx(ReactSelect, { value: types.find((t) => t.value == formik.values.type), options: types, onChange: (newValue) => formik.handleChange({ target: { value: newValue === null || newValue === void 0 ? void 0 : newValue.value, id: "type", name: "type" } }) })] })] })), _jsxs("div", Object.assign({ className: "m-2 p-2" }, { children: [_jsx(Form.Text, { children: t('options') }), _jsx(Row, { children: _jsxs(Col, { children: [
                                //  field options, different for different fields
                                formik.values.type == FieldTypes.Checkbox &&
                                    _jsx(DynamicTextListInput, { name: 'labels', id: 'labels', values: formik.values.labels, onChange: formik.handleChange }), formik.values.type == FieldTypes.Checkbox &&
                                    _jsx(Form.Check, { id: 'distinctValues', name: 'distinctValues', checked: formik.values.distinctValues, onChange: formik.handleChange, label: t('distinctValues') }), formik.values.type == FieldTypes.Date &&
                                    _jsxs(_Fragment, { children: [_jsx(Form.Check, { id: 'forbidPast', name: 'forbidPast', checked: formik.values.forbidPast, onChange: formik.handleChange, label: t('forbidPast') }), _jsx(Form.Check, { id: 'forbidFuture', name: 'forbidFuture', checked: formik.values.forbidFuture, onChange: formik.handleChange, label: t('forbidFuture') })] }), _jsx(Form.Check, { id: 'isRequired', name: 'isRequired', checked: formik.values.isRequired, onChange: formik.handleChange, label: t('isRequired') })] }) }), _jsx(Row, { children: _jsxs(Col, { children: [_jsx(Form.Check, { id: 'useDescription', name: 'useDescription', checked: formik.values.useDescription, onChange: formik.handleChange, label: t('useDescription') }), formik.values.useDescription && _jsx(Form.Control, { as: "textarea", name: 'description', id: 'description', value: formik.values.description, onChange: formik.handleChange })] }) })] })), _jsx(Row, Object.assign({ className: "m-2 p-2" }, { children: _jsx(Col, Object.assign({ className: "d-flex justify-content-end" }, { children: _jsxs(ButtonGroup, { children: [_jsx(Button, Object.assign({ variant: "danger", onClick: () => props.onAbortEditingHandler(props.field.uuid) }, { children: _jsx(FontAwesomeIcon, { icon: faXmark }) })), _jsx(Button, Object.assign({ variant: "success", type: "submit" }, { children: _jsx(FontAwesomeIcon, { icon: faCheck }) }))] }) })) }))] })));
}
export default FieldEditor;

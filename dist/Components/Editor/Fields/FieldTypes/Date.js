import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import ValidationTypes from "../../../../Constraints/ValidationTypes";
import ReduxGetApplicationLanguage from "../../../../Redux/ReduxGet/ReduxGetApplicationLanguage";
function DateField(props) {
    var _a;
    const now = new Date();
    const [value, setValue] = useState((_a = props.value) !== null && _a !== void 0 ? _a : now);
    const { t } = useTranslation();
    const fieldInfo = ((forbidPast, forbidFuture) => {
        if (forbidPast && forbidFuture) {
            return t('dateChangeDisabled');
        }
        else if (forbidFuture) {
            return t('dateOnlyPast');
        }
        else if (forbidPast) {
            return t('dateOnlyFuture');
        }
        else
            return null;
    })(props.forbidPast, props.forbidFuture);
    useEffect(() => {
        if (props.validationKey == ValidationTypes.InitialValidate)
            if (props.onBlur)
                props.onBlur({ target: props, updatedValue: value.toDateString(), errors: {} });
    }, [props.validationKey]);
    return (_jsxs(_Fragment, { children: [(props.forbidFuture || props.forbidPast) &&
                _jsx(Form.Text, { children: fieldInfo }), _jsx(ReactDatePicker, { locale: props.locale, dateFormat: "P", selected: new Date(value), readOnly: props.forbidFuture && props.forbidPast, maxDate: props.forbidFuture ? now : null, minDate: props.forbidPast ? now : null, onChange: (newValue) => {
                    setValue(newValue !== null && newValue !== void 0 ? newValue : now);
                }, onCalendarClose: () => { if (props.onBlur)
                    props.onBlur({ target: props, updatedValue: value.toDateString(), errors: {} }); } })] }));
}
export default connect((state) => ({
    locale: ReduxGetApplicationLanguage(state)
}), () => ({}))(DateField);

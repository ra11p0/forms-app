import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ApplicationModes from '../../Constraints/ApplicationModes';
import ValidationTypes from '../../Constraints/ValidationTypes';
import ReduxGetAnswers from '../../Redux/ReduxGet/ReduxGetAnswers';
import ReduxGetFields from '../../Redux/ReduxGet/ReduxGetFields';
import ReduxSetAnswer from '../../Redux/ReduxSet/ReduxSetAnswer';
import ReduxSetAnswers from '../../Redux/ReduxSet/ReduxSetAnswers';
import { store } from '../../Redux/store';
import Field from './Fields/Field';
function Filler(props) {
    useEffect(() => {
        ReduxSetAnswers(props.answers ?? props.fields);
    }, [props.fields]);
    const [validationKey, setValidationKey] = useState(ValidationTypes.InitialValidate);
    const { t } = useTranslation();
    const onBlur = (evt) => {
        const { target, updatedValue, errors } = evt;
        ReduxSetAnswer({ ...target, value: updatedValue, hasError: Object.keys(errors).length != 0 });
    };
    return (_jsxs("div", { children: [_jsx("div", { children: props.fields.map((field, index) => {
                    return _createElement(Field, { ...field, key: index, validationKey: validationKey, onBlur: onBlur });
                }) }), props.mode == ApplicationModes.Fill &&
                _jsx("div", { children: _jsx(Button, { onClick: () => {
                            setValidationKey(ValidationTypes.SubmitValidate);
                            const fields = ReduxGetAnswers(store.getState());
                            console.dir(fields);
                            props.onSubmit({
                                answers: fields.map(field => ({ uuid: field.uuid, answer: field.value, hasError: field.hasError ?? true })),
                                anyHasError: fields.filter(field => field.hasError ?? true).length != 0 ?? true
                            });
                        }, children: t('submitForm') }) })] }));
}
export default connect((state) => ({
    fields: ReduxGetFields(state)
}), () => ({}))(Filler);

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function DynamicTextListInput(props) {
    var _a;
    const [values, setValues] = useState((_a = props.values) !== null && _a !== void 0 ? _a : ['']);
    const { t } = useTranslation();
    useEffect(() => {
        props.onChange({ target: { value: values, id: props.id, name: props.name } });
    }, [values]);
    return (_jsxs("div", Object.assign({ id: props.id }, { children: [values.map((v, i) => _jsxs("div", Object.assign({ className: "d-flex gap-2 mb-2 " }, { children: [_jsx(Form.Control, { type: 'text', value: v, id: `dynamic-${i}`, name: "dynamic", onChange: (evt) => {
                            const newValues = values.slice();
                            newValues[i] = evt.target.value;
                            setValues(newValues);
                        } }), _jsx(Button, Object.assign({ onClick: () => { setValues([...values.filter((_, k) => i != k)]); }, variant: 'danger' }, { children: _jsx(FontAwesomeIcon, { icon: faTrash }) }))] }), i)), _jsx("div", Object.assign({ className: ' d-flex justify-content-end ' }, { children: _jsx(Button, Object.assign({ onClick: () => { setValues([...values, ""]); }, variant: 'success' }, { children: _jsx(FontAwesomeIcon, { icon: faPlus }) })) }))] })));
}
export default DynamicTextListInput;

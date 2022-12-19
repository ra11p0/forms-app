import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function DynamicTextListInput(props) {
    const [values, setValues] = useState(props.values ?? ['']);
    const { t } = useTranslation();
    useEffect(() => {
        props.onChange({ target: { value: values, id: props.id, name: props.name } });
    }, [values]);
    return (_jsxs("div", { id: props.id, children: [values.map((v, i) => _jsxs("div", { className: "d-flex gap-2 mb-2 ", children: [_jsx(Form.Control, { type: 'text', value: v, id: `dynamic-${i}`, name: "dynamic", onChange: (evt) => {
                            const newValues = values.slice();
                            newValues[i] = evt.target.value;
                            setValues(newValues);
                        } }), _jsx(Button, { onClick: () => { setValues([...values.filter((_, k) => i != k)]); }, variant: 'danger', children: _jsx(FontAwesomeIcon, { icon: faTrash }) })] }, i)), _jsx("div", { className: ' d-flex justify-content-end ', children: _jsx(Button, { onClick: () => { setValues([...values, ""]); }, variant: 'success', children: _jsx(FontAwesomeIcon, { icon: faPlus }) }) })] }));
}
export default DynamicTextListInput;

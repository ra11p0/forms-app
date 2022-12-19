import { jsx as _jsx } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import FieldComponent from "./Fields/Field";
import { HTML5Backend } from "react-dnd-html5-backend";
function EditorStage(props) {
    return (_jsx(DndProvider, { backend: HTML5Backend, children: _jsx(Row, { className: "d-flex justify-content-center", children: _jsx(Col, { children: props.fields.map((field, index) => (_jsx(FieldComponent, { field: field, onRemoveFieldHandler: () => props.onRemoveFieldHandler(field.uuid) }, index))) }) }) }));
}
export default EditorStage;

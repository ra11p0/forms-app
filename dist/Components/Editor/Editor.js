import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ReduxGetFields from "../../Redux/ReduxGet/ReduxGetFields";
import ReduxFixFields from "../../Redux/ReduxSet/ReduxFixFields";
import ReduxRemoveField from "../../Redux/ReduxSet/ReduxRemoveField";
import ReduxSetCurrentlyEdited from "../../Redux/ReduxSet/ReduxSetCurrentlyEdited";
import ReduxSetField from "../../Redux/ReduxSet/ReduxSetField";
import { store } from "../../Redux/store";
import EditorStage from "./EditorStage";
import EditorTitle from "./EditorTitle";
import EditorToolbar from "./EditorToolbar";
function Editor(props) {
    return (_jsxs(_Fragment, { children: [_jsx(Row, { children: _jsx(Col, { children: _jsx(EditorTitle, {}) }) }), _jsx(Row, { children: _jsx(Col, { children: _jsx(EditorStage, { fields: props.fields, onRemoveFieldHandler: (uuid) => {
                            let fieldToRemove = props.fields.find((o) => o.uuid == uuid);
                            if (!fieldToRemove)
                                return;
                            ReduxRemoveField(fieldToRemove.uuid);
                        } }) }) }), _jsx(Row, { children: _jsx(Col, { children: _jsx(EditorToolbar, { onAddNewFieldHandler: () => {
                            ReduxFixFields();
                            const newUuid = Math.random().toString();
                            ReduxSetField({ uuid: newUuid, name: "" });
                            ReduxSetCurrentlyEdited(newUuid);
                        }, onConfirmHandler: () => { props.onSubmit(ReduxGetFields(store.getState())); }, onDiscardHandler: () => { props.onDiscard(); } }) }) })] }));
}
export default connect((state) => ({
    fields: ReduxGetFields(state),
}), () => ({}))(Editor);

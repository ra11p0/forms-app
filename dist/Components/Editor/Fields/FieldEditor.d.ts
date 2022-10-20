/// <reference types="react" />
import Field from "../../../Interfaces/Common/Field";
declare type Props = {
    field: Field;
    onFinishEditingHandler: () => void;
    onAbortEditingHandler: (uuid: string) => void;
};
declare function FieldEditor(props: Props): JSX.Element;
export default FieldEditor;

/// <reference types="react" />
import Field from "../../Interfaces/Common/Field";
declare type Props = {
    fields: Field[];
    onRemoveFieldHandler: (uuid: string) => void;
};
declare function EditorStage(props: Props): JSX.Element;
export default EditorStage;

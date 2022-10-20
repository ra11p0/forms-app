/// <reference types="react" />
import Field from "../../../Interfaces/Common/Field";
declare type Props = {
    field: Field;
    onEditFieldHandler: () => void;
    onRemoveFieldHandler: () => void;
    isHovered?: boolean;
};
declare function FieldPreview(props: Props): JSX.Element;
export default FieldPreview;

/// <reference types="react" />
import FieldInterface from "../../../Interfaces/Common/Field";
declare type Props = {
    field: FieldInterface;
    currentlyEdited: string;
    onRemoveFieldHandler: () => void;
};
declare function Field(props: Props): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Field, {
    field: FieldInterface;
    onRemoveFieldHandler: () => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;

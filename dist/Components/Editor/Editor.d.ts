/// <reference types="react" />
import Field from "../../Interfaces/Common/Field";
declare type Props = {
    fields: Field[];
    onSubmit: (result: Field[]) => void;
    onDiscard: () => void;
};
declare function Editor(props: Props): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Editor, {
    onSubmit: (result: Field[]) => void;
    onDiscard: () => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;

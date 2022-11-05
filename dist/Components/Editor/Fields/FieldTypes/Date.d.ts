/// <reference types="react" />
import Field from "../../../../Interfaces/Common/Field";
declare function DateField(props: Field & {
    locale: string;
}): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof DateField, {
    type?: import("../../../../Constraints/FieldTypes").default | undefined;
    name: string;
    value?: any;
    labels?: string[] | undefined;
    description?: string | undefined;
    onBlur?: ((evt: {
        target: Field;
        updatedValue: any;
        errors: any;
    }) => void) | undefined;
    distinctValues?: boolean | undefined;
    forbidPast?: boolean | undefined;
    forbidFuture?: boolean | undefined;
    isRequired?: boolean | undefined;
    uuid: string;
    hasError?: boolean | undefined;
    validationKey?: number | undefined;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;

/// <reference types="react" />
import ApplicationModes from '../../Constraints/ApplicationModes';
import FieldInterface from '../../Interfaces/Common/Field';
import FormFilledResult from '../../Interfaces/Common/FormFilledResult';
declare type Props = {
    fields: FieldInterface[];
    answers?: FieldInterface[];
    onSubmit: (result: FormFilledResult) => void;
    mode: ApplicationModes;
};
declare function Filler(props: Props): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Filler, {
    mode: ApplicationModes;
    onSubmit: (result: FormFilledResult) => void;
    answers?: FieldInterface[] | undefined;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;

/// <reference types="react" />
import "../i18n/config";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import Field from "../Interfaces/Common/Field";
import ApplicationModes from "../Constraints/ApplicationModes";
import FormFilledResult from "../Interfaces/Common/FormFilledResult";
declare type Props = {
    mode: ApplicationModes;
    fields?: Field[];
    onSubmit: (result: FormFilledResult | Field[]) => void;
    onDiscard: () => void;
};
declare function Forms(props: Props): JSX.Element;
export default Forms;

/// <reference types="react" />
declare type Props = {
    values: string[];
    onChange: (event: any) => void;
    name?: string;
    id?: string;
};
declare function DynamicTextListInput(props: Props): JSX.Element;
export default DynamicTextListInput;

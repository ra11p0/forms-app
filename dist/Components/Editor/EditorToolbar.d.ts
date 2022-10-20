/// <reference types="react" />
declare type Props = {
    onAddNewFieldHandler: () => void;
    onDiscardHandler: () => void;
    onConfirmHandler: () => void;
};
declare function EditorToolbar(props: Props): JSX.Element;
export default EditorToolbar;

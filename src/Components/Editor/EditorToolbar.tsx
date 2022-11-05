import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type Props = {
  onAddNewFieldHandler: () => void;
  onDiscardHandler: () => void;
  onConfirmHandler: () => void;
};

function EditorToolbar(props: Props) {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center m-2 p-2">
      <ButtonGroup>
        <Button onClick={props.onAddNewFieldHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button onClick={props.onDiscardHandler} variant="danger">
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        <Button onClick={props.onConfirmHandler} variant="success">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default EditorToolbar;

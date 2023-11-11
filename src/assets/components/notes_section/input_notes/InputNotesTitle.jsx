import { Button } from "@nextui-org/react";
import { CloseIcon } from "../../../icons/MyIcon";

export default function InputNotesTitle({
  title,
  onClose,
  isHideButton = true,
}) {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Button
        className={isHideButton ? "hidden" : ""}
        onClick={onClose}
        size="sm"
        color="danger"
        variant="light"
        aria-label="Post Note">
        <CloseIcon />
        CLOSE
      </Button>
    </div>
  );
}

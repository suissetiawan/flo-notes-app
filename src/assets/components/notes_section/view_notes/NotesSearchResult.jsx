import NotesList from "./NotesList";
import { Tooltip, Button } from "@nextui-org/react";
import { CloseIcon } from "../../../icons/MyIcon";
import InputNotesTitle from "../input_notes/InputNotesTitle";

function NotesSearchResult({
  notes,
  archived,
  onPost,
  onArchive,
  onDelete,
  onSearch,
  onClose,
}) {
  return (
    <div className={onSearch + " flex-col gap-4"}>
      <div className="flex flex-row justify-between">
        <InputNotesTitle title="Notes Result" />
        <Button
          // isIconOnly
          onClick={() => onClose()}
          size="sm"
          color="danger"
          variant="light"
          aria-label="Post Note">
          <CloseIcon />
          CLOSE
        </Button>
      </div>
      <NotesList datas={notes} onArchive={onArchive} onDelete={onDelete} />
      <InputNotesTitle title="Archived Result" />
      <NotesList datas={archived} onPost={onPost} onDelete={onDelete} />
    </div>
  );
}

export default NotesSearchResult;

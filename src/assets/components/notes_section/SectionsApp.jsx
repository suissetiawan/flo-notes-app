import InputNotesFrom from "./input_notes/InputNotesForm";
import NotesSection from "./view_notes/NotesSection";
export default function SectionsApp({
  notesData,
  eventValue,
  inputHandler,
  onPost,
  onArchive,
  onDelete,
  isSearch,
  onClose,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-10">
      <div className="col-span-1">
        <InputNotesFrom addNewNotes={inputHandler} />
      </div>
      <div className="col-span-2">
        <NotesSection
          noteData={notesData}
          eventValue={eventValue}
          onPost={onPost}
          onArchive={onArchive}
          onDelete={onDelete}
          isSearch={isSearch}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

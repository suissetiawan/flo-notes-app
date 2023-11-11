import InputNotes from "./input_notes/InputNotes";
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
    <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4 px-4 pb-10">
      <div className="col-span-1 mb-4 md:mb-0">
        <InputNotes addNewNotes={inputHandler} />
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

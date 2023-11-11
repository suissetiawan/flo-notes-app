import NotesList from "./NotesList";
import EmptyState from "./EmptyState";
import InputNotesTitle from "../input_notes/InputNotesTitle";

function NotesSearchResult({
  notes,
  archived,
  eventValue,
  onPost,
  onArchive,
  onDelete,
  onSearch,
  onClose,
}) {
  const filterNotes = eventValue
    ? notes.filter((val) =>
        val.title.toLowerCase().includes(eventValue.toLowerCase())
      )
    : notes;

  const filterArchived = eventValue
    ? archived.filter((val) =>
        val.title.toLowerCase().includes(eventValue.toLowerCase())
      )
    : archived;

  return (
    <div className={onSearch + " flex-col gap-4 p-1"}>
      <InputNotesTitle
        title="Notes Result"
        onClose={onClose}
        isHideButton={false}
      />
      {[...filterNotes, ...filterArchived].length !== 0 ? (
        <>
          <NotesList
            datas={filterNotes}
            onArchive={onArchive}
            onDelete={onDelete}
          />
          <InputNotesTitle title="Archived Result" />
          <NotesList
            datas={filterArchived}
            onPost={onPost}
            onDelete={onDelete}
          />
        </>
      ) : (
        <EmptyState message="Not Found !" />
      )}
    </div>
  );
}

export default NotesSearchResult;

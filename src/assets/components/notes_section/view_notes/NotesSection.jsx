import NotesTab from "./NotesTab";
import NotesSearchResult from "./NotesSearchResult";

function NotesSection({
  noteData,
  eventValue,
  onPost,
  onArchive,
  onDelete,
  isSearch,
  onClose,
}) {
  noteData.sort((a, b) => b.id - a.id);
  const notes = noteData.filter((val) => !val.archived);
  const archived = noteData.filter((val) => val.archived);

  return (
    <div className="bg-background rounded-large p-6">
      <NotesTab
        notes={notes}
        archived={archived}
        onPost={onPost}
        onArchive={onArchive}
        onDelete={onDelete}
        onSearch={isSearch ? "hidden" : "flex"}
      />

      <NotesSearchResult
        notes={notes}
        archived={archived}
        eventValue={eventValue}
        onPost={onPost}
        onArchive={onArchive}
        onDelete={onDelete}
        onSearch={isSearch ? "flex" : "hidden"}
        onClose={onClose}
      />
    </div>
  );
}

export default NotesSection;

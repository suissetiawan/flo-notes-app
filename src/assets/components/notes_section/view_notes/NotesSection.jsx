import NotesTabList from "./NotesTabList";

function NotesSection({ noteData, onPost, onArchive, onDelete }) {
  noteData.sort((a, b) => b.id - a.id);
  const notes = noteData.filter((val) => !val.archived);
  const archived = noteData.filter((val) => val.archived);

  return (
    <div className="grid gap-4 p-6 bg-background rounded-large">
      <NotesTabList
        notes={notes}
        archived={archived}
        onPost={onPost}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NotesSection;

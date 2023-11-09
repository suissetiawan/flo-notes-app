import NotesTabList from "./NotesTabList";

function NotesSection({ noteData, onDelete }) {
  const notes = [];
  const archived = [];
  noteData.sort((a, b) => {
    if (a.id > b.id) return -1;
  });

  for (const val of noteData) {
    if (!val.archived) {
      notes.push(val);
    } else archived.push(val);
  }

  return (
    <div className="grid gap-4 p-6 bg-background rounded-large">
      <NotesTabList notes={notes} archived={archived} onDelete={onDelete} />
    </div>
  );
}

export default NotesSection;

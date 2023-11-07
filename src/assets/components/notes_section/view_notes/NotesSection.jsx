import NotesTabList from "./NotesTabList";

function NotesSection({ noteData }) {
  const notes = [];
  const archived = [];

  for (const val of noteData) {
    if (!val.archived) {
      notes.push(val);
    } else archived.push(val);
  }

  return (
    <div className="grid gap-4 p-6 bg-background rounded-large">
      <NotesTabList notes={notes} archived={archived} />
    </div>
  );
}

export default NotesSection;

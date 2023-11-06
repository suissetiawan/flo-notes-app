import { Tabs, Tab } from "@nextui-org/react";
import NotesCard from "./NotesCard";
import { showFormattedDate } from "../../../utils/noteData";

function NotesTabList({ notes, archived }) {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        size="lg"
        color="primary"
        fullWidth
        radius="md">
        <Tab key="notes" title="NOTES">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {notes.map((note) => (
              <NotesCard
                key={note.id}
                id={note.id}
                title={note.title}
                archived={note.archived}
                body={note.body}
                noteTheme={note.noteTheme}
                createdAt={showFormattedDate(note.createdAt)}
              />
            ))}
          </div>
        </Tab>
        <Tab key="archived" title="ARCHIVED">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {archived.map((archive) => (
              <NotesCard
                key={archive.id}
                id={archive.id}
                title={archive.title}
                archived={archive.archived}
                body={archive.body}
                noteTheme={archive.noteTheme}
                createdAt={showFormattedDate(archive.createdAt)}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default NotesTabList;

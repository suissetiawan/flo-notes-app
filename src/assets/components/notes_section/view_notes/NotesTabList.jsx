import { Tabs, Tab } from "@nextui-org/react";
import NotesCard from "./NotesCard";

function NotesTabList({ notes, archived, onPost, onArchive, onDelete }) {
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
                {...note}
                onArchive={onArchive}
                onDelete={onDelete}
              />
            ))}
          </div>
        </Tab>
        <Tab key="archived" title="ARCHIVED">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {archived.map((archive) => (
              <NotesCard
                key={archive.id}
                {...archive}
                onPost={onPost}
                onDelete={onDelete}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default NotesTabList;

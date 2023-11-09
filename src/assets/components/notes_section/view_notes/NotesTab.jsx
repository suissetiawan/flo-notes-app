import { Tabs, Tab } from "@nextui-org/react";
import NotesList from "./NotesList";

function NotesTab({ notes, archived, onPost, onArchive, onDelete, onSearch }) {
  return (
    <div className={onSearch + " w-full flex-col"}>
      <Tabs
        aria-label="Options"
        size="lg"
        color="primary"
        fullWidth
        radius="md">
        <Tab key="notes" title="NOTES">
          <NotesList datas={notes} onArchive={onArchive} onDelete={onDelete} />
        </Tab>
        <Tab key="archived" title="ARCHIVED">
          <NotesList datas={archived} onPost={onPost} onDelete={onDelete} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default NotesTab;

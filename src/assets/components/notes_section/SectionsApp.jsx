import InputNotesFrom from "./input_notes/InputNotesForm";
import NotesSection from "./view_notes/NotesSection";
export default function SectionsApp() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 px-4">
      <div className="col-span-1">
        <InputNotesFrom />
      </div>
      <div className="col-span-2">
        <NotesSection />
      </div>
    </div>
  );
}

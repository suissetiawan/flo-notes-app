import InputNotesFrom from "./inputNotes/InputNotesForm";
import ViewNotesSection from "./viewNotes/viewNotesSection";
export default function SectionsApp() {
  return (
    <div className="grid grid-cols-3 px-4">
      <InputNotesFrom />
      <ViewNotesSection />
    </div>
  );
}

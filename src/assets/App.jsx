import NavbarApp from "./components/navbar/NavbarApp";
import SectionsApp from "./components/notes_section/SectionsApp";
export default function App() {
  return (
    <div className="grid gap-4">
      <NavbarApp />
      <SectionsApp />
    </div>
  );
}

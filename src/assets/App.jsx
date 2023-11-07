import React from "react";
import NavbarApp from "./components/navbar/NavbarApp";
import SectionsApp from "./components/notes_section/SectionsApp";
import { getInitialData } from "./utils/noteData";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: getInitialData(),
    };
  }

  render() {
    return (
      <div className="grid gap-4">
        <NavbarApp />
        <SectionsApp notesData={this.state.datas} />
      </div>
    );
  }
}

export default App;

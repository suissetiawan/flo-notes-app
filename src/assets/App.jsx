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

    this.onaddNotesEventHandler = this.onaddNotesEventHandler.bind(this);
  }

  onaddNotesEventHandler({ title, body, noteTheme, archived }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            noteTheme,
            createdAt: new Date().toISOString(),
            archived,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="grid gap-4">
        <NavbarApp />
        <SectionsApp
          notesData={this.state.datas}
          inputHandler={this.onaddNotesEventHandler}
        />
      </div>
    );
  }
}

export default App;

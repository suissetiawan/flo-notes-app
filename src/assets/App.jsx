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
    this.onDeleteNotesEventHandler = this.onDeleteNotesEventHandler.bind(this);
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

  onDeleteNotesEventHandler(id) {
    const notes = this.state.datas.filter((data) => data.id !== id);
    this.setState({ datas: notes });
  }

  render() {
    return (
      <div className="grid gap-4">
        <NavbarApp />
        <SectionsApp
          notesData={this.state.datas}
          inputHandler={this.onaddNotesEventHandler}
          onDelete={this.onDeleteNotesEventHandler}
        />
      </div>
    );
  }
}

export default App;

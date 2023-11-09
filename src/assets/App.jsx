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
    this.onPostNotesEventHandler = this.onPostNotesEventHandler.bind(this);
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
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

  onPostNotesEventHandler(id) {
    const changeToPostData = this.state.datas.map((data) => {
      if (data.id === id) {
        return { ...data, archived: false };
      }
      return data;
    });

    this.setState({ datas: changeToPostData });
  }

  onArchivedEventHandler(id) {
    const changeToArchiveData = this.state.datas.map((data) => {
      if (data.id === id) {
        return { ...data, archived: true };
      }
      return data;
    });

    this.setState({ datas: changeToArchiveData });
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
          onPost={this.onPostNotesEventHandler}
          onArchive={this.onArchivedEventHandler}
          onDelete={this.onDeleteNotesEventHandler}
        />
      </div>
    );
  }
}

export default App;

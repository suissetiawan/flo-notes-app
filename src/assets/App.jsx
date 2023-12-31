import React from "react";
import NavbarApp from "./components/navbar/NavbarApp";
import SectionsApp from "./components/notes_section/SectionsApp";
import { getInitialData } from "./utils/noteData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
      events: {
        isSearch: false,
        searchValue: "",
      },
    };

    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.eventHandlers = [
      "onaddNotesEventHandler",
      "onPostNotesEventHandler",
      "onArchivedEventHandler",
      "onDeleteNotesEventHandler",
      "onSearchEventHandler",
      "onGetSearchValueHandler",
      "onResultSearchHandler",
    ];

    this.eventHandlers.forEach((handler) => {
      this[handler] = this[handler].bind(this);
    });
  }

  onaddNotesEventHandler({ title, body, noteTheme, archived }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      noteTheme,
      createdAt: new Date().toISOString(),
      archived,
    };
    console.log(newNote);

    this.setState((prevState) => {
      return {
        datas: [...prevState.datas, newNote],
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

  onSearchEventHandler() {
    this.setState({
      events: {
        isSearch: true,
      },
    });
  }

  onResultSearchHandler() {
    this.setState({
      events: {
        isSearch: false,
      },
    });
  }

  onGetSearchValueHandler(value) {
    this.setState((prevState) => ({
      events: {
        ...prevState.events,
        searchValue: value,
      },
    }));
  }

  render() {
    return (
      <div className="grid gap-4">
        <NavbarApp
          onSearch={this.onSearchEventHandler}
          onGetSearch={this.onGetSearchValueHandler}
        />
        <SectionsApp
          notesData={this.state.datas}
          eventValue={this.state.events.searchValue}
          inputHandler={this.onaddNotesEventHandler}
          onPost={this.onPostNotesEventHandler}
          onArchive={this.onArchivedEventHandler}
          onDelete={this.onDeleteNotesEventHandler}
          isSearch={this.state.events.isSearch}
          onClose={this.onResultSearchHandler}
        />
      </div>
    );
  }
}

export default App;

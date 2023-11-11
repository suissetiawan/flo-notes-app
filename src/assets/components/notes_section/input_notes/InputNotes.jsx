import { Input } from "@nextui-org/react";
import React from "react";
import InputNotesForm from "./InputNotesForm";
import { WriteNotes } from "../../../icons/MyIcon";

class InputNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      noteTheme: "bg-fuchsia-800",
      archived: false,
      interaction: {
        showElement: false,
        colHeight: 10,
      },
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onNoteThemeChangeHandler = this.onNoteThemeChangeHandler.bind(this);
    this.onArchivedChangeHandler = this.onArchivedChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onFokusHandler = this.onFokusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyChangeHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onNoteThemeChangeHandler(e) {
    this.setState(() => {
      return {
        noteTheme: e.target.value,
      };
    });
  }

  onArchivedChangeHandler(e) {
    this.setState(() => {
      return {
        archived: e.target.checked,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNewNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        noteTheme: "bg-fuchsia-800",
        archived: "",
      };
    });
  }

  onFokusHandler() {
    this.setState(() => {
      return {
        interaction: {
          showElement: true,
        },
      };
    });
  }

  onBlurHandler() {
    this.setState(() => {
      return {
        interaction: {
          showElement: false,
        },
      };
    });
  }

  render() {
    const width = window.innerWidth;
    const showEl = this.state.interaction.showElement ? "grid" : "hidden";
    const hideEl = this.state.interaction.showElement ? "hidden" : "grid";
    return (
      <div>
        {width > 768 ? (
          <div className="grid p-6 bg-background rounded-large">
            <InputNotesForm
              onSubmitNotes={this.onSubmitEventHandler}
              onTitleChange={this.onTitleChangeHandler}
              onBodyChange={this.onBodyChangeHandler}
              onThemeChange={this.onNoteThemeChangeHandler}
              onArchivedChange={this.onArchivedChangeHandler}
              title={this.state.title}
              body={this.state.body}
              noteTheme={this.state.noteTheme}
              archived={this.state.archived}
            />
          </div>
        ) : (
          <>
            <Input
              className={hideEl}
              placeholder="Make Notes..."
              endContent={<WriteNotes />}
              type="search"
              variant="bordered"
              onFocus={this.onFokusHandler}
            />
            <div className={showEl + " p-6 bg-background rounded-large"}>
              <InputNotesForm
                onSubmitNotes={this.onSubmitEventHandler}
                onTitleChange={this.onTitleChangeHandler}
                onBodyChange={this.onBodyChangeHandler}
                onThemeChange={this.onNoteThemeChangeHandler}
                onArchivedChange={this.onArchivedChangeHandler}
                title={this.state.title}
                body={this.state.body}
                noteTheme={this.state.noteTheme}
                archived={this.state.archived}
                isHideButton={false}
                onClose={this.onBlurHandler}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default InputNotes;

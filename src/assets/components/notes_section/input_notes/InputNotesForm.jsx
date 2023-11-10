import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@nextui-org/react";
import React from "react";
import { selThemes } from "../../../utils/noteTheme";
import InputNotesTitle from "./InputNotesTitle";

class InputNotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      noteTheme: "bg-fuchsia-800",
      archived: "",
      interaction: {
        isShow: "hidden md:inline-block",
        colInput: 10,
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
          isShow: "md:inline-block",
          colInput: 10,
        },
      };
    });
  }

  onBlurHandler() {
    setTimeout(() => {
      this.setState(() => {
        return {
          interaction: {
            isShow: "hidden md:inline-block",
            colInput: 10,
          },
        };
      });
    }, 2000);
  }

  render() {
    const maxChar = 50;
    const isShowEl = this.state.interaction.isShow;
    return (
      <div className="grid gap-4 p-6 bg-background rounded-large">
        <InputNotesTitle title="Input Notes" />
        <form
          className="flex flex-col space-y-4"
          onSubmit={this.onSubmitEventHandler}>
          <div className={isShowEl + " space-y-2"}>
            <p className="text-sm text-end">
              Remaining Character : {maxChar - this.state.title.length}
            </p>
            <Input
              type="text"
              label="Note Title"
              value={this.state.title}
              maxLength={maxChar}
              onChange={this.onTitleChangeHandler}
              onFocus={this.onFokusHandler}
              onBlur={this.onBlurHandler}
            />
          </div>
          <Textarea
            label="Make note..."
            minRows={this.state.interaction.colInput}
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            onFocus={this.onFokusHandler}
            onBlur={this.onBlurHandler}
          />
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <Select
              items={selThemes}
              label="Select Theme"
              selectedKeys={[this.state.noteTheme]}
              onChange={this.onNoteThemeChangeHandler}>
              {selThemes.map((selTheme) => (
                <SelectItem
                  key={selTheme.value}
                  value={selTheme.value}
                  textValue={selTheme.label}>
                  <div className="flex gap-2 items-center">
                    <p className={`p-4 ${selTheme.value} rounded-md`}></p>
                    <div className="flex flex-col">
                      <span className="text-small"> {selTheme.label}</span>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </Select>
            <Checkbox
              isSelected={this.state.archived}
              onChange={this.onArchivedChangeHandler}
              size="lg">
              Archived
            </Checkbox>
          </div>
          <Button type="submit" color="primary">
            Create Now
          </Button>
        </form>
      </div>
    );
  }
}

export default InputNotesForm;

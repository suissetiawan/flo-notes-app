import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { stringify } from "postcss";
import React from "react";
import { selThemes } from "../../../utils/noteTheme";
import InputNotesTitle from "./InputNotesTitle";

class InputNotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      noteTheme: "bg-zinc-800",
      archived: null,
    };
  }

  render() {
    return (
      <div className="grid gap-4 p-6 bg-background rounded-large">
        <InputNotesTitle title="Input Notes" />
        <form className="flex flex-col space-y-4">
          <Input type="text" label="Note Title" value={this.state.title} />
          <Textarea
            label="Fill note ..."
            minRows={10}
            value={this.state.body}
          />
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <Select
              items={selThemes}
              label="Select Theme"
              selectedKeys={[this.state.noteTheme]}>
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
            <Checkbox isSelected={this.state.archived} size="lg">
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

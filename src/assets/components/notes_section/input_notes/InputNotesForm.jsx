import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { selThemes } from "../../../utils/noteTheme";
import InputNotesTitle from "./InputNotesTitle";

function InputNotesForm({
  onSubmitNotes,
  onTitleChange,
  onBodyChange,
  onThemeChange,
  onArchivedChange,
  title,
  body,
  noteTheme,
  archived,
  isHideButton,
  onClose,
}) {
  const maxChar = 50;
  return (
    <>
      <InputNotesTitle
        title="Input Notes"
        isHideButton={isHideButton}
        onClose={onClose}
      />
      <form className="flex flex-col space-y-4 mt-4" onSubmit={onSubmitNotes}>
        <div className=" space-y-2">
          <p className="text-sm text-end">
            Remaining Character : {maxChar - title.length}
          </p>
          <Input
            type="text"
            label="Note Title"
            value={title}
            maxLength={maxChar}
            onChange={onTitleChange}
          />
        </div>
        <Textarea
          label="Make note..."
          minRows="8"
          value={body}
          onChange={onBodyChange}
        />
        <div className="grid grid-cols-2 gap-4 space-y-2 items-stretch">
          <Select
            items={selThemes}
            label="Select Theme"
            selectedKeys={[noteTheme]}
            onChange={onThemeChange}>
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
          <Checkbox isSelected={archived} onChange={onArchivedChange} size="lg">
            Archived
          </Checkbox>
        </div>
        <Button type="submit" color="primary">
          Create Now
        </Button>
      </form>
    </>
  );
}

export default InputNotesForm;

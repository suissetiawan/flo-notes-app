import SectionTitle from "../SectionTitle";
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { selThemes } from "./data";

function InputNotesFrom() {
  return (
    <div className="grid gap-4 col-span-1 p-6 bg-background rounded-large">
      <SectionTitle title="Input Notes" />
      <form className="flex flex-col space-y-4">
        <Input type="text" label="Note Title" />
        <Textarea label="Fill note ..." minRows={10} />
        <div className="grid grid-cols-2 gap-4 items-stretch">
          <Select
            content=""
            items={selThemes}
            label="Select Theme"
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.data.value} className="flex items-center gap-2">
                  <p className={`p-2 ${item.data.value} rounded-full`}></p>
                  <div className="flex flex-col">
                    <span>{item.data.label}</span>
                  </div>
                </div>
              ));
            }}>
            {(selTheme) => (
              <SelectItem key={selTheme.value} textValue={selTheme.label}>
                <div className="flex gap-2 items-center">
                  <p className={`p-4 ${selTheme.value} rounded-full`}></p>
                  <div className="flex flex-col">
                    <span className="text-small"> {selTheme.label}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
          <Checkbox size="lg">Archived</Checkbox>
        </div>
        <Button type="submit" color="primary">
          Create Now
        </Button>
      </form>
    </div>
  );
}

export default InputNotesFrom;

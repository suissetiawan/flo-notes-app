import { NavbarContent, Input } from "@nextui-org/react";
import SearchIcon from "../../icons/SearchIcon";

function NavbarSearch() {
  return (
    <NavbarContent as="div" justify="end">
      <Input
        classNames={{
          // base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Search notes..."
        size="lg"
        startContent={<SearchIcon size={18} />}
        type="search"
      />
    </NavbarContent>
  );
}

export default NavbarSearch;

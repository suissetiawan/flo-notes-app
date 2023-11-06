import { NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon } from "../../icons/MyIcon";

function NavbarSearch() {
  return (
    <NavbarContent as="div" justify="end">
      <Input
        placeholder="Search notes..."
        startContent={<SearchIcon size={18} />}
        type="search"
      />
    </NavbarContent>
  );
}

export default NavbarSearch;

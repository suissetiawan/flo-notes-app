import { NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon } from "../../icons/MyIcon";

function NavbarSearch({ onSearch, onGetSearch }) {
  return (
    <NavbarContent as="div" justify="end">
      <Input
        onFocus={() => onSearch()}
        onChange={(e) => onGetSearch(e.target.value)}
        placeholder="Search notes..."
        startContent={<SearchIcon />}
        type="search"
      />
    </NavbarContent>
  );
}

export default NavbarSearch;

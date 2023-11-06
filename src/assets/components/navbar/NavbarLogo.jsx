import { NavbarContent, Image } from "@nextui-org/react";
import logo from "./logo-title.png";
function NavbarLogo() {
  return (
    <NavbarContent as="div" className="items-center " justify="start">
      <Image src={logo} alt="" width={200} />
    </NavbarContent>
  );
}

export default NavbarLogo;

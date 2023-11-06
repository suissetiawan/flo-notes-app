import { Navbar } from "@nextui-org/react";
import NavbarLogo from "./NavbarLogo";
import NavbarSeach from "./NavbarSearch";

export default function NavbarApp() {
  return (
    <Navbar isBordered className="w-screen" maxWidth="full" height="5rem">
      <div className="flex justify-between w-full">
        <div className="w-[40%] md:w-[30%]">
          <NavbarLogo />
        </div>
        <div className="w-[55%] md:w-[50%] ">
          <NavbarSeach />
        </div>
      </div>
    </Navbar>
  );
}

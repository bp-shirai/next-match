import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

import { GiMatchTip } from "react-icons/gi";
import { NavButton, NavLink } from "./NavLink";

export function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{ item: ["text-xl", "text-white", "uppercase", "data-[active=true]:text-yellow-200"] }}>
      <NavbarBrand as={Link} href={"/"}>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Members" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavButton href="/login" label="Login" />
        <NavButton href="register" label="Register" />
      </NavbarContent>
    </Navbar>
  );
}

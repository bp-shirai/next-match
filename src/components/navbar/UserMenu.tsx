"use client";

import { signOutUser } from "@app/actions/authActions";
import { transformImageUrl } from "@lib/util";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";

type Props = {
  //user: Session["user"];
  userInfo: {
    name: string | null;
    image: string | null;
  } | null;
};

export function UserMenu({ userInfo }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userInfo?.name || "user name"}
          size="md"
          src={transformImageUrl(userInfo?.image)}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User action menu">
        <DropdownSection showDivider>
          <DropdownItem isReadOnly as="span" className="h-14 flex flex-row" aria-label="username">
            Signed in as {userInfo?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="/members/edit">
          Edit profile
        </DropdownItem>
        <DropdownItem color="danger" onClick={async () => signOutUser()}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

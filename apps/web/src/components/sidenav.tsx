import Link from "next/link";

import logo from "../assets/logo.svg";
import Image from "next/image";
import { Popover, PopoverTrigger } from "@repo/ui/components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { currentUser } from "@clerk/nextjs/server";
import { PopoverContent } from "@repo/ui/components/ui/popover";
import { SignOutButton } from "@clerk/nextjs";
import { ExitIcon } from "@radix-ui/react-icons";

export const Sidenav = async () => {
  const user = await currentUser();

  return (
    <aside className="sticky inset-0 p-4">
      <nav className="flex flex-col justify-between h-full">
        <Link href="/">
          <Image src={logo} alt="logo" width={24} height={16} />
        </Link>
        <Popover>
          <PopoverTrigger>
            <Avatar className="w-6 h-6">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>{user?.username}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="p-1 m-2 my-1 rounded-lg overflow-clip bg-popover border">
            <ul className="flex flex-col gap-2">
              <SignOutButton>
                <li className="w-full p-2 flex gap-2 items-center rounded-md text-popover-foreground cursor-pointer text-xs hover:bg-popover-foreground/10 focus:bg-popover-foreground/10">
                  <ExitIcon />
                  Sign out
                </li>
              </SignOutButton>
            </ul>
          </PopoverContent>
        </Popover>
      </nav>
    </aside>
  );
};

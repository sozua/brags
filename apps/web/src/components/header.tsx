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

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-foreground text-primary-foreground p-4">
      <nav className="flex w-full justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={21} />
        </Link>
        <Popover>
          <PopoverTrigger>
            <Avatar className="w-8 h-8">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>{user?.username}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
        </Popover>
      </nav>
    </header>
  );
};

export default Header;

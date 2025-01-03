import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/auth-service";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-16 w-auto object-contain"
            src="/logo.png"
            alt="Pocket Planner"
            height={60}
            width={200}
          ></Image>
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button
                variant="outline"
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">DashBoard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"}>
              <Button className=" flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </SignedIn>
          {/* <ModeToggle />  enable this for theme toggle*/}
        </div>
      </nav>
    </div>
  );
};

export default Header;

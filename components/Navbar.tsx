import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <Button
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <span>Logout</span>
              </Button>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <Button
              onClick={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <span>LogIn</span>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

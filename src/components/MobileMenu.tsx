"use client";

import { Info, LayoutDashboard, Loader2, MenuIcon, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <nav className="md:hidden fixed z-50 bottom-14 right-14 left-auto flex justify-center">
      <div className="shadow-2xl rounded-md outline outline-2 outline-white dark:outline-slate-900">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <Button variant="outline" size="lg">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup onClick={() => setOpen(false)}>
              <DropdownMenuItem asChild>
                <Link href="/" className="w-full flex items-center gap-1.5">
                  <Info className="mr-2 h-5 w-5" />
                  <span>Home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                {session ? (
                  <>
                    <DropdownMenuItem>
                      <Link
                        href="/dashboard"
                        className="w-full flex items-center gap-1.5"
                      >
                        <LayoutDashboard className="mr-2 h-5 w-5" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => router.push("/logout")}
                      className="gap-1.5"
                    >
                      <User className="mr-2 h-5 w-5" />
                      <span>{isLoading ? "Signing out" : "Sign out"}</span>
                      {isLoading ? (
                        <Loader2 className="animate-spin h-4 w-4" />
                      ) : null}
                    </DropdownMenuItem>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="flex w-full items-center gap-1.5"
                  >
                    <LayoutDashboard className="mr-2 h-5 w-5" />
                    <span>Sign in</span>
                  </Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default MobileMenu;

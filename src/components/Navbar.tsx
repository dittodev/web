import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={`${buttonVariants({ variant: "link" })} text-2xl`}
        >
          cube
        </Link>

        <div className="hidden md:flex gap-4">
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                dashboard
              </Link>
              <Button>
                <Link href="/logout">sign out</Link>
              </Button>
            </>
          ) : (
            <Button>
              <Link href="/login">sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

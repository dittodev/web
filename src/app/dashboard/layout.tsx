import { Button } from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();
  const dbUser = await db.user.findUnique({
    where: {
      id: user.user.id,
    },
  });
  if (!dbUser) return notFound();
  const userIsAdmin = dbUser.isAdmin;
  return (
    <section>
      {userIsAdmin ? (
        <nav className="top-0 left-0 right-0 border-b border-slate-300 dark:border-slate-700 marker:flex items-center justify-between mb-4">
          <Link href={"/dashboard"}>
            <Button variant={"ghost"}>dashboard</Button>
          </Link>
          <Link href={"/dashboard/api"}>
            <Button variant={"ghost"}>api settings</Button>
          </Link>
        </nav>
      ) : (
        <></>
      )}

      {children}
    </section>
  );
}

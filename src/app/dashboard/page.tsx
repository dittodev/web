import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ditto | dashboard",
  description: "The ditto bot",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  return (
    <div className="page">
      ditto dashboard (coming NOT soon)
      <br />
      <Link
        href="/dashboard/api"
        className="underline decoration-themeColor decoration-2 underline-offset-4"
      >
        do you want to generate an api key?
      </Link>
    </div>
  );
};

export default page;

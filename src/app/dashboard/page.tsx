import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "cube | dashboard",
  description: "The cube bot",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  return <div className="page">dashy dash</div>;
};

export default page;

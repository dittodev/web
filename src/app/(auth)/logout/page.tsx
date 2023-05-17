"use client";

import SignOutForm from "@/components/SignOutForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "unauthenticated") router.push("/login");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">welcome to cube passport</h1>
      <p>are you sure you want to sign out?</p>
      <SignOutForm />
    </div>
  );
};

export default Page;

"use client";

import UserAuthForm from "@/components/UserAuthForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") router.push("/dashboard");

  return (
    <div className="page text-center">
      <h1 className="text-4xl font-bold">welcome to ditto passport</h1>
      <p className="pb-4">please select a sign-in method</p>
      <UserAuthForm />
    </div>
  );
};

export default Page;

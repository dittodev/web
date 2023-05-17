"use client";

import * as React from "react";
import { FC } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/toast";
import { useRouter } from "next/navigation";

const UserAuthForm: FC = ({}) => {
  const router = useRouter();
  const signUserOut = async () => {
    try {
      await signOut();
    } catch (err) {
      toast({
        type: "error",
        title: "Error",
        message: "Something went wrong.",
      });
    } finally {
      toast({
        type: "success",
        title: "Goodbye!",
        message: "See you later!",
      });
    }
  };

  const backToDash = async () => {
    try {
      router.push("/dashboard");
    } catch (err) {
      toast({
        type: "error",
        title: "Error",
        message: "Something went wrong.",
      });
    } finally {
      toast({
        type: "default",
        title: "Transferring",
        message: "You got sent back to the dashboard.",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <Button variant={"default"} onClick={signUserOut}>
        Yes
      </Button>
      <Button variant={"subtle"} onClick={backToDash}>
        No
      </Button>
    </div>
  );
};

export default UserAuthForm;

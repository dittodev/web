"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/Button";
import { toast } from "./ui/toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutHandler = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signOutHandler} isLoading={isLoading}>
      sign out
    </Button>
  );
};

export { SignOutButton };

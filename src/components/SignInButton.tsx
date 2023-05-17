"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/Button";
import { toast } from "./ui/toast";

const SignInButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithDiscord = async () => {
    setIsLoading(true);

    try {
      await signIn("discord");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithDiscord} isLoading={isLoading}>
      sign in
    </Button>
  );
};

export { SignInButton };

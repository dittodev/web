"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";
import { Button } from "./ui/Button";
import { toast } from "./ui/toast";
import Image from "next/image";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithDiscord = async () => {
    setIsLoading(true);

    try {
      await signIn("discord");
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error logging in with Discord",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        className="max-w-sm w-full bg-blurple"
        variant={"blurple"}
        onClick={loginWithDiscord}
        disabled={isLoading}
      >
        {isLoading ? null : (
          <Image
            src={"/discord.svg"}
            alt={"discord logo"}
            width={24}
            height={24}
          />
        )}
        <p className="pl-4">Sign in with Discord</p>
      </Button>
    </div>
  );
};

export default UserAuthForm;

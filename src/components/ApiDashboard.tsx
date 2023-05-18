import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import React from "react";
import { Input } from "./ui/Input";
import ApiKeyOptions from "./ApiKeyOptions";

async function ApiDashboard() {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKeys = await db.apiKey.findMany({
    where: {
      user: {
        id: user.user.id,
      },
    },
  });

  if (!apiKeys) return notFound();

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  return (
    <>
      <div className="container md:max-w-2xl">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-4xl">welcome back, {user.user.name}!</h1>
          <Input readOnly value={activeApiKey.key} />
          <ApiKeyOptions apiKeyKey={activeApiKey.key} />
        </div>
      </div>
    </>
  );
}

export default ApiDashboard;

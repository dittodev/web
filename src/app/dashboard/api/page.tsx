import RequestApiKey from "@/components/RequestApiKey";
import ApiDashboard from "@/components/ApiDashboard";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userID: user.user.id, enabled: true },
  });

  const dbUser = await db.user.findFirst({
    where: {
      id: user.user.id,
    },
  });

  if (!dbUser) return notFound();

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl mx-auto mt-4">
        {apiKey ? (
          /* @ts-expect-error Server Components */
          <ApiDashboard />
        ) : (
          <RequestApiKey />
        )}
      </div>
    </div>
  );
};

export default page;

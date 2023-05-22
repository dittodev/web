import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/toast";
import Providers from "@/components/Providers";
import { BaseHead } from "@/components/BaseHead";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/MobileMenu";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "ditto bot",
  description: "The ditto bot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-themeBlack text-white antialiased", grotesk.className)}
    >
      <head>
        <BaseHead />
      </head>
      <body>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />

          <MobileMenu />

          <main className="pt-20">{children}</main>
        </Providers>

        {/* mobile menu height */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}

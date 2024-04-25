import "@repo/ui/globals.css";

import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidenav } from "../components/sidenav";
import { cn } from "@repo/ui/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brags",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "flex py-2 pr-2 h-screen")}>
          <SignedIn>
            <Sidenav />
          </SignedIn>
          <main className="w-full h-full border rounded-lg bg-surface text-surface-foreground">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
import "./globals.css";
import type { Metadata } from "next";
import Login from "@/components/Login";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { SessionProvider } from "@/components/SessionProvider";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGpt Clone",
  description: "chat with gpt models",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                {/*sidebar*/}
                <Sidebar />
              </div>

              {/*ClientProvider - Notification*/}
              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}C</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

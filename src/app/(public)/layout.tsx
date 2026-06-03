import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import NavBar from ".././_components/navbar";
import StaticNavBar from "../_components/StaticNavBar";


export const metadata: Metadata = {
  title: "Contacts Manager App",
  description: "An application to manage your contacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="min-h-screen bg-gray-50">
          <StaticNavBar/>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
  );
}

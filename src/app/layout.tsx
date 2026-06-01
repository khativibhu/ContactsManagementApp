import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar";


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
    <html
      lang="en" >
      <body>
        <div className="min-h-screen bg-gray-50">
          <NavBar/>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

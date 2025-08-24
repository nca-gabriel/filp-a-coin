import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flip The Coin",
  description: "Coin Flip",
  icons: {
    icon: "/heads.svg", // default
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className="min-h-screen flex flex-col bg-[#404A65]">
        {children}
      </body>
    </html>
  );
}

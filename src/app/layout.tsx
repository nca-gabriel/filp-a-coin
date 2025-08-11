import "./globals.css";

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

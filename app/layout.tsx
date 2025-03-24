import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CGTII",
  description: "Care givers training and internship institute",
  icons: {
    icon: "/icons/carti.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

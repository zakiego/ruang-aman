import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const font = Funnel_Display({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ruang Aman",
  description: "Ruang Aman untuk berbagi pikiran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}

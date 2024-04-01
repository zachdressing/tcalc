import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space_Mono = Space_Mono({
  subsets: ["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Created by Zachary D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>{children}</body>
    </html>
  );
}

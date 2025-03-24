import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";

const varela = Varela({
  weight: "400",
  variable: "--font-varela",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirayu's Portfolio",
  description: "Explore Chirayu Sahu's portfolio featuring web development, AI projects, and creative designs. Passionate about building innovative digital experiences. Let's connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${varela.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

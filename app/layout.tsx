import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduFlow CRM - Salesforce Education",
  description: "Education CRM powered by Salesforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

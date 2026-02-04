import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hitanshi Nahar", // Change this to your desired tab name
  description: "Portfolio of Hitanshi Nahar",
  icons: {
    icon: "/favicon.png", // Put your PNG in public folder as favicon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}

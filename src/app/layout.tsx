import MainContainer from "@/components/layout/MainContainer";
import "@/styles/pages/globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charlotte | Photographer",
  description: "Generated by create next app",
  authors: [{ name: "André Siboli" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}

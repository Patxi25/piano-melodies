import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { ReactNode } from "react";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piano Melodies",
  description:
    "Personalized, in-home piano lessons in Miami. Adaptive, billingual instruction rooted in music therapy -- for children of all ages and abilities.",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

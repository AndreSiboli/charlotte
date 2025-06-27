import { ReactNode } from "react";
import { Lenis } from "lenis/react";

import Navbar from "@/components/Navbar/Index";
import Footer from "@/components/layout/Footer";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <Lenis root options={{ duration: 1, anchors: true }}>
      <div style={{ position: "relative" }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Lenis>
  );
}

import { ReactNode } from "react";

import Navbar from "@/components/Navbar/Index";
import Footer from "@/components/layout/Footer";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}

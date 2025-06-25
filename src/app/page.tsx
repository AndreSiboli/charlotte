// import styles from "@/styles/pages/page.module.scss";
import Hero from "@/components/pageComponents/root/Hero";
import Works from "@/components/pageComponents/root/Works";
import About from "@/components/pageComponents/root/About";
import Blog from "@/components/pageComponents/root/Blog";
import Services from "@/components/pageComponents/root/Services";
import Contact from "@/components/pageComponents/Contact";
import { Lenis } from "lenis/react";

export default function Home() {
  return (
    <Lenis root options={{ duration: 1, anchors: true }}>
      <Hero />
      <Services />
      <Blog />
      <About />
      <div style={{ height: "7em" }} />
      <Works />
      <Contact />
    </Lenis>
  );
}

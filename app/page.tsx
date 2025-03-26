import Hero from "@/components/Hero";
import {Grid} from "@/components/Grid";
import AboutMe from "@/components/about-me";
import { ReactLenis } from '@/lib/lenis'

export default function Home() {
  return (
    <>
    <ReactLenis root>
    <Hero />
    <AboutMe />
    <Grid />
    </ReactLenis>
    </>
  );
}

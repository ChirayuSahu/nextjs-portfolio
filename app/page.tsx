'use client'

import Hero from "@/components/Hero";
import {Grid} from "@/components/Grid";
import AboutMe from "@/components/about-me";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis();
    
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  },[])

  return (
    <>
    <Hero />
    <AboutMe />
    <Grid />
    </>
  );
}

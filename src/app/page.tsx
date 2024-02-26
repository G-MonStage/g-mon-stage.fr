"use client";
import { HomeSection } from "@/sections/HomeSection";
import { ExplainSection } from "@/sections/ExplainSection";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FaqSection } from "@/sections/FaqSection";

const Home = () => {
  const ball = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ball.current) {
        ball.current.style.left = `${event.pageX}px`;
        ball.current.style.top = `${event.pageY}px`;
      }
    };

    window.addEventListener("mousemove", listener);

    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, [ball]);

  return (
    <>
      <Head>
        <title>GMonStage</title>
      </Head>
      <div
        className="from-purple/10 to-blue-1/10 pointer-events-none absolute hidden h-80 w-80 translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-gradient-to-br blur-3xl md:block"
        ref={ball}
      />
      <HomeSection />
      <ExplainSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default Home;

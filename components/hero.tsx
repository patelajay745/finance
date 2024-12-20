"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageref.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Control Your <br />
          Financial Destiny
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Pocket Planner is your AI-driven financial assistant, tracking your
          habits, analyzing data in real-time, and offering tailored advice to
          optimize your wealth.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href={"/dashboard"}>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageref} className="hero-image">
            <Image
              src="/banner.jpg"
              height={720}
              width={1280}
              className="rounded-lg shadow-2xl border mx-auto"
              alt="main banner"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

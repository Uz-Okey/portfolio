'use client'

import { Separator } from "@/components/ui/separator";
import { AnimateText } from "@/components/ui/animated-text";

export default function Herosection() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section Background */}
      <div className="relative bg-[url('/okey3.png')] bg-cover bg-center sm:bg-fixed h-[80vh] sm:h-screen">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative w-full max-w-3xl pt-20 mx-auto z-10 flex items-center justify-start h-full">
          <div className="text-white text-3xl sm:text-5xl font-bold leading-tight p-6 sm:p-4 tracking-wide sm:text-[60px]">
            Hi! I<span className="text-green-900">&apos;</span>m
            <br /> Okey
            <br />
            <AnimateText
              text="Uzondu."
              className="bg-white font-bold sm:text-[60px]"
              type="elastic"
              custom={1}
            />
            <Separator className="my-4" />
            <p className="text-[15px] sm:text-[16px] font-light">
              I&apos;m a UI Designer and a Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

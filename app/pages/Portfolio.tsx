'use client'
import { AnimateText } from "@/components/ui/animated-text";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [section, setSection] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const current = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSection(true);
          else setSection(false);
        });
      },
      { threshold: 0.2 }
    );

    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div id="Portfolio" className="bg-[#b7b6b381] mt-10 pb-[100px]">
      <AnimateText
        text="03 Portfolio"
        type="cascade"
        className="text-2xl text-gray-700 text-shadow-2xs pt-8 mt-5 mb-5 font-bold text-center"
      />

      <div
        ref={sectionRef}
        className={`pb-[60px] ${
          section ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        } duration-1000 ease-in-out transition-all overflow-hidden w-full max-w-4xl px-8 mx-auto`}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/poft1.png"
              alt="my port"
              width={400}
              height={200}
              className="rounded-lg shadow-lg h-[180px]"
            />
            <Link
              href="https://career-byte-code-8quh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition-all duration-300 shadow-md"
            >
              Visit Website
            </Link>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/port2.png"
              alt="my port2"
              width={400}
              height={200}
              className="rounded-lg shadow-lg h-[180px]"
            />
            <Link
              href="https://travisa-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition-all duration-300 shadow-md"
            >
              Visit Website
            </Link>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/port3.png"
              alt="my port3"
              width={400}
              height={200}
              className="rounded-lg shadow-lg h-[180px]"
            />
            <Link
              href="https://job-entry-xy8z.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition-all duration-300 shadow-md"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

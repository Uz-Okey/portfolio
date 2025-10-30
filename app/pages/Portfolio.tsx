'use client';
import WaterRippleEffect from '../../components/ui/water-ripple-effect'
import { AnimateText } from "@/components/ui/animated-text";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';

export default function Portfolio() {
    const [section, setSection] = useState(false);
    const sectionRef = useRef(null)
    useEffect(() => {
        const current = sectionRef.current

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSection(true)
                } else {
                    setSection(false)
                }
            },
            )
        }, { threshold: 0.2 }
        )

        if (current) {
            observer.observe(current)
        }

        return()=>{
                if (current) {
            observer.unobserve(current)
        }

        }
    }, [])

    return (
        <div id="Portfolio"
            className='bg-[#b7b6b381] py-[100px]'
        >

            <AnimateText
                text="03 Portfolio"
                type="cascade"
                className="text-2xl text-white text-shadow-2xs pt-3 mb-5 font-bold text-center "
                duration={0.10}
                delay={0}
            />

            <div ref={sectionRef}  className={` pb-[60px] ${section ? 'opacity-100 scale-100': 'opacity-0 scale-0'} duration-1000 ease-in-out transition-all overflow-hidden w-full max-w-4xl px-8 mx-auto`}>

                <div className="grid md:grid-cols-3">

                    <div className="flex flex-col items-center space-y-3">
                        <WaterRippleEffect imageSrc="/poft1.png" width={250} height={200} />
                        <Link
                            href="https://career-byte-code-8quh.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-all duration-300 shadow-md"
                        >
                            Visit Website
                        </Link>
                    </div>

                    <div className="flex flex-col items-center space-y-3">
                        <WaterRippleEffect imageSrc="/port2.png" width={250} height={200} />
                        <Link
                            href="https://travisa-ten.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-all duration-300 shadow-md"
                        >
                            Visit Website
                        </Link>
                    </div>

                    <div className="flex flex-col items-center space-y-3">
                        <WaterRippleEffect imageSrc="/port3.png" width={250} height={200} />
                        <Link
                            href="https://job-entry-xy8z.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-all duration-300 shadow-md"
                        >
                            Visit Website
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}

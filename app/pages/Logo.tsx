import Marquee from "react-fast-marquee";
import { AnimateText } from "@/components/ui/animated-text";
import Image from "next/image";

export default function Logos() {
  return (
    <section className="w-full bg-[#b7b6b3ac] py-16">
      <div className="max-w-4xl mx-auto text-center px-4">

    
        <AnimateText
          text="01 My Stack"
          type="cascade"
          className="text-3xl text-shadow-2xs sm:text-4xl font-extrabold text-grey-700 mb-10 tracking-tight"
          duration={0.1}
          delay={0}
        />
        <p className="text-gray-700 text-[20px] text-shadow-2xs  sm:text-base mb-10 max-w-md mx-auto">
          These are some of the technologies and tools I work with to bring ideas to life.
        </p>

        {/* Scrolling Logos */}
        <div className="rounded-sm shadow-lg bg-white border border-gray-100 py-6 overflow-hidden">
          <Marquee
            speed={30}
            className='overflow-hidden'
          >
            <div className="flex space-x-16 items-center">
              {[
                "/html.png",
                "/next.jpg",
                "/csss.png",
                "/js.png",
                "/boostrap.jpg",
                "/tailwind.png",
                "/vscode.jpg",
                "/supabase.jpg",
                "/postgre.png",
                "/react.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-x-4 space-y-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 space-x-4 rounded-full shadow-md border border-white flex items-center justify-center bg-white">
                    <Image
                      src={src}
                      alt="stack logo"
                      width={50}
                      height={50}
                      className="rounded-md gap-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

      </div>
    </section>
  );
}

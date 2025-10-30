import { AnimateText } from "@/components/ui/animated-text";
import Link from "next/link";
export default function About() {
    return (
        <div className="p-8">



            <AnimateText
                text="03 About Me"
                type="cascade"
                className="text-2xl font-bold text-center text-white text-shadow-2xs"
                duration={0.10}
                delay={0}
             

            />

            <div className="bg-gray-700 text-white max-w-3xl my-8 rounded-md w-full p-10 mx-auto">
                <div>
                    <Link href="/" className="text-[24px] text-center flex items-center justify-center my-4 font-bold myColor text-gray-900">
                        <span className="border-green-700 text-green-700 border-r-4  p-2 rounded-full">O</span>
                    </Link>
                </div>
                <p className="text-[18px] font-extralight">
                    👋 Hi, I’m Okey Uzondu, a passionate Junior Developer from Nigeria 🇳🇬. I enjoy building clean, fast, and user-friendly web applications.

                    I work mainly with JavaScript and Next.js, and I love turning ideas into real products that people can actually use. My goal is to keep growing as a developer, learning new technologies, and contributing to impactful projects.

                    Let’s build something amazing together 🚀
                </p>

                <div className="flex items-center justify-center mt-4">
                    <Link
                        href="/resume.pdf"
                        download
                        className="bg-green-900 text-white px-2 py-1 rounded-sm cursor-pointer"
                    >
                        Download Resume
                    </Link>
                </div>

            </div>
        </div>
    );
}
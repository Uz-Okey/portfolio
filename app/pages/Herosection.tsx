'use client'
import { Separator } from "@/components/ui/separator";
import { AnimateText } from "@/components/ui/animated-text";
export default function Herosection() {
    return (
        <div className="overflow-hidden">
        


                <div className="relative bg-[url('/okey3.png')] bg-cover bg-center bg-fixed h-screen">
 
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                    
                    <div className="relative w-full max-w-3xl pt-20 mx-auto z-10 flex items-center justify-start h-full">

                        <div className="text-white text-5xl p-8 md:p-0 font-bold max-w-3xl md:text-base/17 text-start md:font-stretch-extra-expanded tracking-wide md:font-extrabold md:text-[60px] ">
                           Hi! I<span className="text-green-900">&apos;</span>m
                            <br /> Okey
                            <br />

                            <AnimateText text="Uzondu." className="bg-white font-bold md:text-[60px]" type="elastic" custom={1} />
                            <Separator className="my-4" />
                            <p className="text-[16px] font-light">Im a Ui Designer and a Web Developer</p>
                        </div>


                    </div>
                </div>
        </div>
    );
}
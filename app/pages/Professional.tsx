import  ProgressDemo  from "./ProgressDemo";
import { AnimateText } from "@/components/ui/animated-text";
import About from "./About";
export default function Professional() {
    return (
        <div>
            <div className="bg-[url('/bg.avif')] relative bg-center bg-cover  sm:mt-0 w-screen bg-local">
                <div className="top-0 left-0 absolute  h-full w-full"></div>
                <div className="relative w-full text-center justify-center items-center pt-10 mx-auto z-10 flex h-full">
                    <div className="text-white text-3xl  md:p-0 font-bold max-w-3xl  md:font-extrabold md:text-[30px] ">
                    
                            <AnimateText
                              text="02 My Skills"
                              type="cascade"
                              className="text-3xl text-shadow-2xs sm:text-4xl font-extrabold text-grey-700 tracking-tight"
                              duration={0.1}
                              delay={0}
                            />
                        
                        <p className="text-[20px] text-gray-700 text-center px-8 font-normal text-shadow-2xs  py-3 ">My Knowledge Level In Software</p>
                          <ProgressDemo/>

                                    <About />
                    </div>


                </div>

            </div>
        </div>
    );
}
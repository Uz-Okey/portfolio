import  ProgressDemo  from "./ProgressDemo";

import About from "./About";
export default function Professional() {
    return (
        <div>
            <div className="bg-[url('/bg.avif')] relative bg-center bg-cover h-vhd w-screen bg-local">
                <div className="top-0 left-0 absolute  h-full w-full"></div>
                <div className="relative w-full text-center justify-center items-center pt-10 mx-auto z-10 flex h-full">
                    <div className="text-white text-3xl  md:p-0 font-bold max-w-3xl  md:font-extrabold md:text-[30px] ">
                        <p className="text-white px-5 text-start md:text-center text-5xl font-bold shadow-2xl text-shadow-2xs z-10">“02 My Expertise”</p>
                        
                        <p className="text-[16px]  text-start sm:text-center px-5 font-normal text-shadow-2xs shadow-2xl pt-4">My Knowledge Level In Software</p>
                          <ProgressDemo/>

                                    <About />
                    </div>


                </div>

            </div>
        </div>
    );
}
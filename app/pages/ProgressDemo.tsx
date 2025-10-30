'use client'

import { useEffect, useRef, useState } from "react";

export default function ProgressDemo() {

    const [count1, setCount1] = useState(0);
    const [scroll1, setScroll1] = useState(false);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);

    const scroll1Ref = useRef(null);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setCount1(prev => (prev >= 97 ? prev : prev + 1));
        }, 150);
        const timer2 = setInterval(() => {
            setCount2(prev => (prev >= 95 ? prev : prev + 1));
        }, 200);
        const timer3 = setInterval(() => {
            setCount3(prev => (prev >= 90 ? prev : prev + 1));
        }, 220);
        const timer4 = setInterval(() => {
            setCount4(prev => (prev >= 85 ? prev : prev + 1));
        }, 200);
        const timer5 = setInterval(() => {
            setCount5(prev => (prev >= 90 ? prev : prev + 1));
        }, 190);
        const timer6 = setInterval(() => {
            setCount6(prev => (prev >= 95 ? prev : prev + 1));
        }, 280);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
            clearInterval(timer5);
            clearInterval(timer6);
        };
    }, []);

    useEffect(() => {
        const current = scroll1Ref.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setScroll1(true);
                } else {
                    setScroll1(false);
                }
            });
        }, { threshold: 0.1 });

        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); };
    }, []);


    return (
        <div className="h-[80vh] sm:min-h-screen flex flex-col items-center justify-center px-8">
            <div className="max-w-3xl w-full p-8 rounded-2xl shadow-xl border border-orange-200 space-y-6">
                <h1 className="text-2xl font-bold text-center text-white mb-8">
                    Frontend & Backend Skills
                </h1>

                {/* --- Progress Bars --- */}
                <div className="space-y-5">

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count1}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count1}%</span>
                                <span>HTML</span>
                            </div>
                        </div>
                    </div>

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count2}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count2}%</span>
                                <span>CSS</span>
                            </div>
                        </div>
                    </div>

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count3}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count3}%</span>
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count4}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count4}%</span>
                                <span>React</span>
                            </div>
                        </div>
                    </div>

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count5}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count5}%</span>
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>

                    <div ref={scroll1Ref} className={`${scroll1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-700`}>
                        <div className="w-full bg-white rounded-full overflow-hidden">
                            <div
                                className="p-2 flex justify-between items-center text-white font-semibold text-xs sm:text-sm rounded-full transition-all"
                                style={{ width: `${count6}%`, backgroundColor: '#364153' }}
                            >
                                <span>{count6}%</span>
                                <span>Nest.js</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

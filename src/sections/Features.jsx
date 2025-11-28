import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "../assets/data";
const Features = () => {
    const [ActiveIndex, setActiveIndex] = useState(0);
    const [IsPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!IsPaused) {
                setActiveIndex((prev) => (prev + 1) % features.length);
            }
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, [IsPaused]);

    const handleHover = (index) => {
        setIsPaused(true);
        setActiveIndex(index);
    };

    const handleLeve = () => {
        setIsPaused(false);
    };
    return (
        <section className="container mx-auto px-4 py-24 " id="Features">
            <div className=" max-w-2xl mb-20 ">
                <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left">
                    Advanced Trading
                    <br />
                    <span className="font-medium clash-display grad1">
                        Features & Tools
                    </span>
                </h2>
                <p className="text-lg text-zinc-300/80 text-left">
                    Experience professional-grade trading tools and features designed for
                    both novice and experienced crypto traders.
                </p>
            </div>

            <div className="w-full ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 ">
                    {/*  */}
                    <div className="md:col-span-5 space-y-3 ">
                        <div className="col w-full h-auto p-0 space-y-3">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={handleLeve}
                                    onClick={() => setActiveIndex(index)}
                                    className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 transition-all duration-300 ease-out border rounded-xl ${ActiveIndex === index
                                        ? "border-indigo-400/40 bg-indigo-500/10"
                                        : "border-transparent"
                                        }`}
                                >
                                    {/* الأيقونة */}
                                    <div>{feature.icon}</div>

                                    {/* النصوص */}
                                    <div className="col gap-1">
                                        <h3 className="text-base clash-display text-indigo-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-zinc-300/80">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:col-span-7 min-h-[320px] centered-row">
                        <AnimatePresence mode="wait">
                            <motion.div key={features[ActiveIndex].title} initial={{opacity:0, y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-60}} transition={{duration:0.5,ease:"easeOut"}}
                                className="glass overflow-hidden rounded-xl w-full relative">
                                {/* Gradient كـ parent */}
                                <div className="inset-0 bg-gradient-to-br from-indigo-500 to-transparent flex items-center justify-center">
                                    {/* الصورة داخل gradient */}
                                    <img
                                        src={features[ActiveIndex].image}
                                        alt="Feature_img"
                                        className="max-w-full max-h-full object-contain relative z-10"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

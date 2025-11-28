import { useRef } from "react"
import { testimonials } from "../assets/data"

const TestimonialSection = () => {
    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.setProperty("--marquee-play-state", "paused");
        }
    };
    
    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.setProperty("--marquee-play-state", "running");
        }
    };

    return (
        <section id="Testimonial" className='py-20 overflow-hidden '>
            <div className='container mx-auto px-4'>
                <div className='max-w-2xl mx-auto text-center mb-16'>
                    <h2 className="text-5xl font-normal md:text-6xl mb-6 tracking-tight clash-display">
                        Trusted by Traders
                    </h2>
                    <p className="text-sm text-zinc-400/90 text-center">
                        Join thousands of satisfied traders on ForexTrade
                    </p>
                </div>

                <div className="relative flex flex-col antialiased">
                    <div className="relative flex overflow-hidden py-4">

                        <div 
                            ref={marqueeRef}
                            className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* First set of testimonials */}
                            {testimonials.map((Testimonial, index) => (
                                <div key={index} className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-2 border-white/5 hover:border-white/10 transition-all duration-300 p-8 rounded-xl ">
                                    <div className="flex items-center gap-4 mb-6 ">
                                        <div className="h-12 w-12 overflow-clip rounded-full text-xl flex justify-center items-center bg-pink-500">
                                            {!Testimonial.image ? Testimonial.name[0] : <img src={Testimonial.image} alt={Testimonial.name} />}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg clash-display text-white/90">{Testimonial.name}</h4>
                                            <p className="text-sm text-white/60">{Testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed ">
                                        {Testimonial.content}
                                    </p>
                                </div>
                            ))}
                            {/* Second set of testimonials (the duplicate) */}
                            {testimonials.map((Testimonial, index) => (
                                <div key={index + testimonials.length} className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-2 border-white/5 hover:border-white/10 transition-all duration-300 p-8 rounded-xl ">
                                    <div className="flex items-center gap-4 mb-6 ">
                                        <div className="h-12 w-12 overflow-clip rounded-full text-xl flex justify-center items-center bg-pink-500">
                                            {!Testimonial.image ? Testimonial.name[0] : <img src={Testimonial.image} alt={Testimonial.name} />}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg clash-display text-white/90">{Testimonial.name}</h4>
                                            <p className="text-sm text-white/60">{Testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed ">
                                        {Testimonial.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute h-full w-20 bg-gradient-to-r from-black to-transparent left-0"></div>
                    <div className="absolute h-full w-20 bg-gradient-to-l from-black to-transparent right-0"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
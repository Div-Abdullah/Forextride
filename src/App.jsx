import HomePages from "./assets/pages/HomePages";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useRef, useEffect } from "react";

const App = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        const smoother = ScrollSmoother.create({
            content: "#smooth-content",
            smooth: 1.8,
            effects: true,
        });

        return () => {
            if (smoother) {
                smoother.kill();
            }
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="text-zinc-100 text-3xl">
            <NavBar/>
            <div id="smooth-content" ref={contentRef} >
                <HomePages/>
            </div>
        </div>
    );
};

export default App;
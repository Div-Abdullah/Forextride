import { Command, X } from "lucide-react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [IsScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.out",
    });
    setIsOpen(false); // يغلق الموبايل منيو إذا كان مفتوح
  };

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 transition-all duration-300 rounded-full ${
        IsScrolled
          ? "h-14 bg-[#1b1b1b]/40 backdrop-blur-2xl border-white/10 scale-95 w-[90%] max-w-2xl z-[999]"
          : "h-14 bg-[#1b1b1b] scale-95 w-[95%] max-w-3xl z-[999]"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">
          {/* Logo */}
          <div
            className="centered-row gap-2 hover:-translate-y-1 duration-200 ease-out cursor-pointer"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: 0,
                ease: "power2.out",
              })
            }
          >
            <Command className="w-5 h-5 text-indigo-500" />
            <span className="font-bold text-base clash-display">
              Forextride
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:centered-row gap-6">
            {["Features", "Price", "Testimonial"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, `#${item}`)}
                className="text-sm text-zinc-300/90 hover:text-indigo-300 hover:-translate-y-1 ease-out transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-indigo-900">
              Start Trading
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden glass p-2 rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-zinc-200" />
            ) : (
              <img src="/menu.svg" alt="menu-icon" className="w-6 h-6" />
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#1b1b1b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 animate-in fade-in-0 slide-in-from-top-5 duration-300 ease-out">
          {["Features", "Price", "Testimonial"].map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, `#${item}`)}
              className="text-base text-zinc-200 hover:text-indigo-300 transition-all duration-200"
            >
              {item}
            </a>
          ))}
          <button className="clash-display text-base bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-indigo-900">
            Start Trading
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;

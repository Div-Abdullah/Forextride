import { motion } from "framer-motion";
const logos = [
    "/log1.png",
    "/log2.png",
    "/log3.png",
    "/log4.png",
    "/log5.png"
];
const ExtandedLogo = [...logos,...logos,...logos]
const LogoCarousel = () => {
    return (
        <div className="w-full overflow-hidden cursor-pointer bg-[#050505] 
                        backdrop-blur-sm py-12 mt-20">
            <motion.div className="flex space-x-16"
            style={{width:"fit-cintent" , display:"flex" ,gap:"4rem"}}
            initial={{opacity:0 , x:"0%"}} animate={{opacity:1 , x:"-50%"}} transition={{duration:0.5, x:{duration:15,repeat:Infinity,ease:"linear",delay:0.5}}}>
                {ExtandedLogo.map((items, index) => (
                    <motion.img key={index} 
                    src={items} 
                    alt="logo" 
                    className="h-12 object-contain" 
                    initial={{opacity:0.5}}
                    whileHover={{opacity:1, scale:1.05,transition:{duration:0.2}, }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default LogoCarousel;

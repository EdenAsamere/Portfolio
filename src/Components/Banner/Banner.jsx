import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaInstagram, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";


const Banner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer", "Web Developer", "MERN Stack", "UI Designer"],
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 200,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className="w-full h-[800px] pb-20 flex border-b-[1px] border-b-black mt-10 pt-12 shadow-lg">
            <div className=" w-1/2 text-white flex flex-col gap-20 ">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-bold">
                        Hi, I'm
                        <span className="capitalize" style={{ color: '#ff014f' }} > Eden Asamere</span>
                    </h1>
                    <h2 className="text-4xl font-bold">
                        a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>
                    <p className="text-base font-light leading-6 tracking-wide">
                        An Enthusiastic Full Stack Developer with a passion for creating interactive and responsive web applications. I am proficient in MERN Stack and have experience in UI/UX Designing.
                    </p>
                </div>
                <div className="flex flex-row gap-40">
                <div>
                    <h2 className=" flex text-base uppercase mb-4 font-extralight ">Find me in</h2>
                    <div className="flex gap-2">
                        <span className="bannerIcon">
                            <a href="https://www.linkedin.com/in/edenasamere"><FaLinkedinIn  /></a>
                        </span>
                        <span className="bannerIcon">
                            <FaInstagram  />
                        </span>
                    </div>
                    
                </div>
                <div>
                    <h2 className=" flex text-base uppercase mb-4 font-extralight ">Skills</h2>
                    <div className="flex">
                        <span className="bannerIcon">
                            <SiTailwindcss  />
                        </span>
                        <span className="bannerIcon">
                            <FaBootstrap  />
                        </span>
                        <span className="bannerIcon">
                            <FaReact  />
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                        <span className="bannerIcon">
                            <FaNode  />
                        </span>
                        <span className="bannerIcon">
                            <SiMongodb  />
                        </span>
                        
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    );
};

export default Banner;

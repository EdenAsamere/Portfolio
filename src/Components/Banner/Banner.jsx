import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaInstagram, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiAngular, SiDjango, SiDotnet, SiExpress, SiFigma, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";


const Banner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer","MERN Stack", "Mobile App Developmer","UI/UX Designer"],
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 200,
        delaySpeed: 2000,
    });

    return (
        <section
            id="home"
            className="min-h-screen pb-24 pt-24 px-4 border-b border-black dark:border-gray-300 shadow-lg flex items-center justify-center bg-black dark:bg-white transition-colors duration-300">
                <div className="w-1/2 text-white dark:text-black flex flex-col gap-20 ">
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
                <div className="flex flex-wrap md:justify-between gap-8 w-full">
                    {/* Skills */}
                    <div>
                        <h2 className="text-base uppercase mb-4 font-extralight">Skills</h2>
                        <div className="flex flex-wrap gap-4">
                        <span className="bannerIcon"><SiPython/></span> 
                        <span className="bannerIcon"><SiJavascript/></span>
                        <span className="bannerIcon"><SiTypescript/></span>
                        <span className="bannerIcon"><SiTailwindcss /></span>
                        <span className="bannerIcon"><FaBootstrap /></span>
                        <span className="bannerIcon"><FaNode /></span>
                        <span className="bannerIcon"><FaReact /></span>
                        <span className="bannerIcon"><SiNextdotjs /></span>
                        <span className="bannerIcon"><SiExpress/></span>
                        <span className="bannerIcon"><SiAngular/></span>
                        <span className="bannerIcon"><SiDjango/></span>
                        <span className="bannerIcon"><SiDotnet/></span>
                        <span className="bannerIcon"><SiFigma/></span>                        
                        <span className="bannerIcon"><SiMongodb /></span>
                        <span className="bannerIcon"><SiPostgresql/></span>

                        </div>
                    </div>


                    {/* Contact Links */}
                    <div>
                        <h2 className="text-base uppercase mb-4 font-extralight">Find me in</h2>
                        <div className="flex flex-row gap-4">
                        <span className="bannerIcon">
                            <a href="https://www.linkedin.com/in/edenasamere" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://www.instagram.com/edu_asamere/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                            </a>
                        </span>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    );
};

export default Banner;

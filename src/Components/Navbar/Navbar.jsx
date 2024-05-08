import { navlinksdata } from "./../../Constants/Navlinksdata";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo2.png";
import Resume from "../../assets/Resume.pdf";

const Navbar = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sticky top-0 w-full z-50 bg-black h-20 mx-auto flex justify-between items-center border-b-[0.5px] bg-b-gray ">
      <div>
        <img src={logo} alt="logo" className="w-20 h-20 pt-2" />
      </div>
      <div>
        {navlinksdata && navlinksdata.length > 0 && (
          <ul className="flex items-center gap-10">
            {navlinksdata.map((navLink) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-gray-800 duration-300 ease-in-out transition-all-300ms font-poppins"
                key={navLink.id}
              >
                <Link
                  to={navLink.path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={handleDownloadCV}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-gray-800 duration-300 ease-in-out transition-all-300ms font-poppins"
              >Download CV
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

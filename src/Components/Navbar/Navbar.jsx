import React, { useState } from "react";
import { navlinksdata } from "../../Constants/Navlinksdata";
import { Link } from "react-scroll";
import Resume from "../../assets/Resume.pdf";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="shadow-md sticky top-0 w-full z-50 bg-black dark:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-3xl font-poppins text-white dark:text-black">Eden Asamere</div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-6 items-center">
            {navlinksdata.map((navLink) => (
              <Link
                key={navLink.id}
                to={navLink.path}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-black cursor-pointer transition duration-300 font-poppins"
              >
                {navLink.title}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-black cursor-pointer transition duration-300 font-poppins"
            >
              Download CV
            </button>
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black font-poppins border border-gray-600 dark:border-gray-300 transition duration-300"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-2 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black border border-gray-600 dark:border-gray-300 transition duration-300"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black dark:bg-white z-50 shadow-lg">
            <ul className="flex flex-col gap-6 px-4 py-6">
              {navlinksdata.map((navLink) => (
                <li key={navLink.id}>
                  <Link
                    to={navLink.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-black cursor-pointer transition duration-300 font-poppins"
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleDownloadCV();
                    setIsOpen(false);
                  }}
                  className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-black cursor-pointer transition duration-300 font-poppins"
                >
                  Download CV
                </button>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black border border-gray-600 dark:border-gray-300 transition duration-300 w-full"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

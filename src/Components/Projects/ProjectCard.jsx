import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, des, src, link }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-lg flex flex-col 
      bg-black text-white 
      dark:bg-white dark:text-black dark:hover:bg-gray-100
      hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
      transition-colors duration-300">
      
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={src}
          alt="project"
          className="object-cover group-hover:scale-110 duration-300"
        />
      </div>

      <div className="mt-5 flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-lg mt-4 text-[#ff014f]">{title}</h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="text-lg w-10 h-10 mt-4 rounded-full
              bg-gray-100 text-gray-700 
              dark:bg-gray-800 dark:text-white
              inline-flex justify-center items-center 
              hover:text-[#ff014f] duration-300 cursor-pointer">
              <FaGithub />
            </span>
          </a>
        </div>

        <p className="text-sm font-light  text-gray-400 dark:text-gray-400">{des}</p>
      </div>
    </div>
  );
}

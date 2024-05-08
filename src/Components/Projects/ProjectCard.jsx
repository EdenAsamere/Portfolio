import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, des, src, link }) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-black to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 text-white">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={src}
          alt="project"
          className="object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div className="mt-5 flex flex-col gap-6">
        <div className="flex flex-row gap-20">
          <h4 className="text-lg mt-4 text-[#ff014f]">{title}</h4>
          <div>
            <span
              className="text-lg w-10 h-10 mt-4 rounded-full
               bg-black inline-flex justify-center items-center 
              text-gray-400 hover:text-[#ff014f] duration-300 cursor-pointer"
            >
              <a href={link}><FaGithub /></a>
            </span>
          </div>
        </div>
        <div className="">
          <p className="text-sm font-light">{des}</p>
        </div>
      </div>
    </div>
  );
}

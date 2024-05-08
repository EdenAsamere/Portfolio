import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";
import projectone from "../../assets/images/proj1.jpg";
import projecttwo from "../../assets/images/proj2.png"
import projectthree from "../../assets/images/proj3.jpg"
import projectfour from "../../assets/images/proj4.jpg"

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit My Portfolio and Keep Your Feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <ProjectCard
          title="E-Commerce Website"
          des="An e-commerce website built using react js and tailwind"
          src={projectone}
          link="https://github.com/EdenAsamere/e-commerce"
        />
        <ProjectCard
          title="Save Lives Website"
          des="A project that aims at solving the problem of people in need of financial help for their medical bills. Developed interactive and attractive user interface using the above frameworks."
          src={projectfour}
          link="https://github.com/EdenAsamere/Save-Live"
        />
        <ProjectCard
          title="A Job Boarding platform Backend API"
          des="A platform where employers can post jobs and employees can search for jobs"
          src={projecttwo}
          link="https://github.com/EdenAsamere/Job-Board"
        />
        <ProjectCard
          title="Blog App Backend Api "
          des="A powerful backend system that makes it easy for users to create, edit, and publish content."
          src={projectthree}
          link="https://github.com/EdenAsamere/Blog-app"
        />
        
      </div>
    </section>
  );
}

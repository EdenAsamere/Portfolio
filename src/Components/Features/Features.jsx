import Title from "../Layouts/Title";
import Card from "./Card";
import { FaFigma } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";

const Features = () => {
    return (
      <section id="features" 
      className=" text-white w-full pb-20 border-b-[1px] border-b-black">
        
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-3 gap-20">
            <Card 
              icon={<CgWebsite/>}
              title ="Website Development" 
              des="I'm really good at making websites that are easy to use and have cool features."/>
            <Card
              icon={<CiMobile1 />} 
              title="Mobile App Development" 
              des="Specializing in building mobile apps with Flutter, a powerful framework for creating beautiful, fast, and native-like experiences across iOS and Android platforms."/>
            <Card
              icon={<FaFigma />} 
              title="UI/UX Design" 
              des="I create easy-to-use and good-looking interfaces using Figma, a tool for making websites and apps look great and work smoothly. It helps make sure users have a really nice experience."/>
        </div>
      </section>
    );
  };
  
  export default Features;
  
import { Atom, Figma } from "lucide-react";
import { AiFillGithub  , AiOutlineJavaScript  } from "react-icons/ai";
import { TbBrandNextjs , TbBrandCss3 } from "react-icons/tb";

export default function Skills() 
{
  const skills = [
    { 
      name: "React", 
      percent: "60%", 
      icon: <Atom size={50} className="text-[#00d8ff]" /> 
    },
    { 
      name: "Figma", 
      percent: "80%", 
      icon: <Figma size={50} /> 
    },
    { 
      name: "HTML/CSS", 
      percent: "80%", 
      icon: <TbBrandCss3 size={50} /> 
    },
    { 
      name: "Next.js", 
      percent: "80%", 
      icon: <TbBrandNextjs size={50} />
    },
    { 
      name: "Java Script", 
      percent: "60%", 
      icon: <AiOutlineJavaScript size={50} /> 
    },
    { 
      name: "GitHub", 
      percent: "90%", 
      icon: <AiFillGithub size={50} /> 
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว My Skills */}
      <h1 className="text-4xl text-white font-medium mb-8">
        My <span className="text-[#FF8A00]">Skills</span>
      </h1>

      {/* Grid ของ Skills (จัดเรียงแบบ Flex Wrap) */}
      <div className="flex flex-wrap gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* กล่องวงรีแนวตั้ง (Pill shape) */}
            <div className="border border-gray-600/50 hover:border-[#FF8A00] transition-colors rounded-[50px] w-[90px] h-[130px] flex flex-col justify-center items-center gap-4 bg-[#1E1E1E]">
              <div className="text-white">
                {skill.icon}
              </div>
              <span className="text-[#FF8A00] text-sm font-medium">{skill.percent}</span>
            </div>
            
            {/* ชื่อ Skill ด้านล่าง */}
            <span className="text-gray-300 text-sm mt-4">{skill.name}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
}
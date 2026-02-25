import { Atom, Figma, FileCode2 } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";

export default function Skills() {
  // สร้าง Array เก็บข้อมูล Skills เพื่อให้โค้ดดูเป็นระเบียบและจัดการง่าย
  const skills = [
    { 
      name: "React", 
      percent: "60%", 
      // ใช้ Atom แทนไอคอน React และปรับสีฟ้าให้ใกล้เคียง
      icon: <Atom size={32} className="text-[#00d8ff]" /> 
    },
    { 
      name: "Figma", 
      percent: "80%", 
      icon: <Figma size={32} /> 
    },
    { 
      name: "HTML/CSS", 
      percent: "80%", 
      icon: <FileCode2 size={32} /> 
    },
    { 
      name: "Next.js", 
      percent: "80%", 
      // ใช้ตัวอักษร N แทนโลโก้ Next.js
      icon: <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold text-lg">N</div> 
    },
    { 
      name: "Java Script", 
      percent: "60%", 
      // ใช้กรอบหกเหลี่ยมพร้อมตัวอักษร JS
      icon: <div className="w-9 h-9 border-2 border-white rounded-lg flex items-center justify-center font-bold text-xs">JS</div> 
    },
    { 
      name: "GitHub", 
      percent: "90%", 
      icon: <AiFillGithub size={32} /> 
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
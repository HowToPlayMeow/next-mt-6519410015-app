import { Code, Globe, Pencil } from "lucide-react";

export default function Specializations() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว My Specializations */}
      <h1 className="text-4xl text-white font-medium mb-8">
        My <span className="text-[#FF8A00]">Specializations</span>
      </h1>

      {/* Container สำหรับกล่องความเชี่ยวชาญ */}
      <div className="flex flex-col gap-4">
        
        {/* กล่องที่ 1: Front-end developer */}
        {/* ใช้ border-[#FF8A00] เพื่อให้มีเส้นขอบสีส้ม หรือใส่ hover:border-[#FF8A00] หากต้องการให้เปลี่ยนสีตอนเอาเมาส์ชี้ */}
        <div className="border border-[#FF8A00]/50 hover:border-[#FF8A00] transition-colors rounded-2xl p-6 bg-[#1E1E1E]">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-white font-bold text-base">Front-end developer</h4>
            <Code className="text-[#FF8A00]" size={20} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
          </p>
        </div>

        {/* กล่องที่ 2: UI/UX Designer */}
        <div className="border border-[#FF8A00]/50 hover:border-[#FF8A00] transition-colors rounded-2xl p-6 bg-[#1E1E1E]">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-white font-bold text-base">UI/UX Designer</h4>
            <Globe className="text-[#FF8A00]" size={20} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
          </p>
        </div>

        {/* กล่องที่ 3: Graphic designer */}
        <div className="border border-[#FF8A00]/50 hover:border-[#FF8A00] transition-colors rounded-2xl p-6 bg-[#1E1E1E]">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-white font-bold text-base">Graphic designer</h4>
            <Pencil className="text-[#FF8A00]" size={20} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            As a graphic designer, I transform ideas into visually striking and impactful designs.
          </p>
        </div>

      </div>
    </div>
  );
}
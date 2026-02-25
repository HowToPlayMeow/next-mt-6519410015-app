import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function MyCard() {
  return (
    <div className="w-64 h-[600px] rounded-[30px] p-6 flex flex-col items-center text-center shadow-lg border border-white/40">
      
      {/* ส่วนรูปโปรไฟล์ (เอารูปตัวเองมาใส่ในโฟลเดอร์ public แล้วใช้ tag <img src="/ชื่อรูป.jpg" /> แทนได้ครับ) */}
      <div className="w-40 h-40 bg-[#2A2A2A] rounded-[30px] mb-4 flex items-center justify-center text-gray-500 overflow-hidden">
        <img src="http://203.159.94.107/cat/76cI.gif" />
      </div>
      
      {/* ชื่อและรหัส */}
      <p className="text-sm text-gray-400 mt-1">STU ID: 6519410015</p>
      <p className="text-sm text-gray-400 mt-2 mb-6">Fullstack Web Developer</p>

      {/* Social Icons */}
      <div className="flex gap-4 mb-8 text-gray-400">
        <Facebook size={18} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <Twitter size={18} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <Instagram size={18} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <Linkedin size={18} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <Github size={18} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
      </div>

      {/* ปุ่ม HIRE ME */}
      <button className="bg-[#FF8A00] text-black font-bold py-3 px-8 rounded-full w-full hover:bg-[#e67e00] transition-colors mt-auto">
        HIRE ME !
      </button>
    </div>
  );
}
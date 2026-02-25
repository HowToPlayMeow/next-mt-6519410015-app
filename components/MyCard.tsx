import { FaFacebookSquare , FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";

export default function MyCard()
{
  return (
    <div className="w-64 h-[600px] rounded-[30px] p-6 flex flex-col items-center text-center shadow-lg border border-white/40">
      
      <h4 className="text-2xl text-[#FF8A00] font-medium mb-4">Tanakron<span className="text-white"> Panlerd</span></h4>

      <div className="rounded-[30px] mb-4 flex items-center justify-center overflow-hidden">
        <img src="photo/6519410015.jpg"/>
      </div>
      
      <p className="text-white">STU ID: <span className="text-[#FF8A00]"> 6519410015</span></p>
      <p className="text-sm text-gray-400 mt-2 mb-6">Fullstack Web Developer</p>

      <div className="flex gap-4 mb-8 text-gray-400">
        <FaFacebookSquare size={25} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <BsTwitterX size={25} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <FaInstagram size={25} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <PiLinkedinLogo size={25} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
        <FaGoogle size={25} className="hover:text-[#FF8A00] cursor-pointer transition-colors" />
      </div>

      <button className="bg-[#FF8A00] text-black font-bold py-3 px-8 rounded-full w-full hover:bg-[#e67e00] transition-colors mt-auto cursor-pointer">HIRE ME !</button>
    </div>
  );
}
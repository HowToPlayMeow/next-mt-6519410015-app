"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome , FiMessageSquare } from "react-icons/fi";
import { PiUserListBold , PiBagSimple} from "react-icons/pi";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { TfiList } from "react-icons/tfi";
import { TbBrowserCheck } from "react-icons/tb";

export default function SideMenu() 
{
  const pathname = usePathname();

  const menuItems = 
  [
    { path: "/", icon: <FiHome size={20} /> },
    { path: "/aboutme", icon: <PiUserListBold size={20} /> },
    { path: "/eduexp", icon: <LiaDoorOpenSolid size={20} /> },
    { path: "/spec", icon: <TfiList size={20} /> },
    { path: "/projects", icon: <PiBagSimple size={20} /> },
    { path: "/skills", icon: <TbBrowserCheck size={20} /> },
    { path: "/contactme", icon: <FiMessageSquare size={20} /> },
  ];

  return (
    <div className="w-14 h-[400px] rounded-[30px] py-6 flex flex-col items-center gap-2 shadow-lg border border-white/40">
      {menuItems.map((item) => 
      {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <div
              className={`p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-[#FF8A00] text-black shadow-[0_0_15px_rgba(255,138,0,0.5)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}>
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
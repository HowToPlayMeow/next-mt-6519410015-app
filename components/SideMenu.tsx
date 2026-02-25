"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, PenTool, Briefcase, Code, Mail } from "lucide-react";

export default function SideMenu() 
{
  const pathname = usePathname();

  const menuItems = 
  [
    { path: "/", icon: <Home size={20} /> },
    { path: "/aboutme", icon: <User size={20} /> },
    { path: "/eduexp", icon: <GraduationCap size={20} /> },
    { path: "/spec", icon: <PenTool size={20} /> },
    { path: "/projects", icon: <Briefcase size={20} /> },
    { path: "/skills", icon: <Code size={20} /> },
    { path: "/contactme", icon: <Mail size={20} /> },
  ];

  return (
    <div className="w-16 h-[600px] rounded-[30px] py-8 flex flex-col items-center gap-6 shadow-lg border border-white/40">
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
              }`}
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
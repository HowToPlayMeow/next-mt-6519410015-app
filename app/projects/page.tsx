import React from 'react';

export default function Projects() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว Featured Projects */}
      <h1 className="text-4xl text-white font-medium mb-6">
        Featured <span className="text-[#FF8A00]">Projects</span>
      </h1>

      {/* ชื่อโปรเจกต์และคำอธิบาย */}
      <div className="mb-6">
        <h4 className="text-white font-bold text-base mb-2">
          Manage Task App - fullstack web development
        </h4>
        <p className="text-gray-400 text-[13px] leading-relaxed max-w-2xl">
          Here's my latest project built with Next.js and Laravel, using TailwindCSS on the 
          front-end. Watch the video to see the responsive landing page in action!
        </p>
      </div>

      <img src="photo/web.png"/>

    </div>
  );
}
export default function EduExp() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว Education & Experience */}
      <h1 className="text-4xl text-white font-medium mb-8">
        Education & <span className="text-[#FF8A00]">Experience</span>
      </h1>

      {/* Container สำหรับรายการประวัติ */}
      <div className="flex flex-col gap-6">
        
        {/* รายการที่ 1: ปัจจุบัน */}
        <div>
          <p className="text-[#FF8A00] text-sm mb-1">2022 - Present</p>
          <h4 className="text-white font-bold text-base">UI/UX Designer</h4>
          <p className="text-gray-400 text-sm mb-2">Freelance</p>
          
          <h4 className="text-white font-bold text-base">Fullstack Web Developer</h4>
          <p className="text-gray-400 text-sm">Freelance</p>
        </div>

        {/* รายการที่ 2: มหาวิทยาลัย */}
        <div>
          <p className="text-gray-400 text-sm mb-1">2022 - 2025</p>
          <h4 className="text-white font-bold text-base">Bachelor Degree in Technology Digital and Innovation</h4>
          <p className="text-gray-400 text-sm">Southeast Asia University</p>
        </div>

        {/* รายการที่ 3: มัธยมศึกษา */}
        <div>
          <p className="text-gray-400 text-sm mb-1">2015 - 2021</p>
          <h4 className="text-white font-bold text-base">High school</h4>
          <p className="text-gray-400 text-sm">Taweethapiseck School</p>
        </div>

      </div>
    </div>
  );
}
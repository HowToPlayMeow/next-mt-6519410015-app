export default function EduExp() 
{
  return (
    <div className="flex flex-col justify-center h-full w-full">

      <h1 className="text-4xl text-white font-bold mb-8">Education & <span className="text-[#FF8A00]">Experience</span></h1>

      <div className="flex flex-col gap-6">
        
        <div>
          <p className="text-[#FF8A00] text-sm mb-1 pl-6">2022 - Present</p>
          <h4 className="text-white font-bold text-base pl-6">UI/UX Designer</h4>
          <p className="text-gray-400 text-sm mb-2 pl-6">Freelance</p>
          
          <h4 className="text-white font-bold text-base pl-6">Fullstack Web Developer</h4>
          <p className="text-gray-400 text-sm pl-6">Freelance</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1 pl-6">2022 - 2025</p>
          <h4 className="text-white font-bold text-base pl-6">Bachelor Degree in Technology Digital and Innovation</h4>
          <p className="text-gray-400 text-sm pl-6">Southeast Asia University</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1 pl-6">2015 - 2021</p>
          <h4 className="text-white font-bold text-base pl-6">High school</h4>
          <p className="text-gray-400 text-sm pl-6">Taweethapiseck School</p>
        </div>

      </div>
    </div>
  );
}
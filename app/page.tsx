export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว Lets Work Together */}
      <h3 className="text-2xl text-white font-medium mb-4">
        Lets Work <span className="text-[#FF8A00]">Together !</span>
      </h3>

      {/* ส่วนแนะนำตัวหลัก */}
      <h1 className="text-[35px] font-bold leading-tight text-white mb-6">
        Hi From <span className="text-[#FF8A00]">Chanintorn</span> ,<br />
        Interactive Designer & Fullstack<br />
        Web Developer
      </h1>

      {/* ข้อความอธิบาย (Lorem Ipsum) */}
      <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto 
        earum voluptates obcaecati corrupti voluptatem .
      </p>

      {/* ส่วนตัวเลขสถิติ (Stats) */}
      <div className="flex gap-12">
        {/* สถิติที่ 1 */}
        <div className="flex flex-col">
          <span className="text-[#FF8A00] text-4xl font-bold mb-1">3+</span>
          <span className="text-gray-400 text-xs uppercase tracking-wider">Years of<br />Experience</span>
        </div>
        
        {/* สถิติที่ 2 */}
        <div className="flex flex-col">
          <span className="text-[#FF8A00] text-4xl font-bold mb-1">10+</span>
          <span className="text-gray-400 text-xs uppercase tracking-wider">Projects<br />Completed</span>
        </div>
      </div>
      
    </div>
  );
}
export default function Projects() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว Featured Projects */}
      <h3 className="text-2xl text-white font-medium mb-6">
        Featured <span className="text-[#FF8A00]">Projects</span>
      </h3>

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

      {/* ส่วนแสดงรูปภาพโปรเจกต์ (Mockup Browser) */}
      <div className="w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-lg border border-gray-700/50">
        
        {/* แถบด้านบนของ Browser (จุด 3 สี) */}
        <div className="bg-[#f3f4f6] px-4 py-2 flex items-center gap-2 border-b border-gray-200">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          <div className="ml-4 bg-white px-2 py-0.5 rounded text-[10px] text-gray-500 border border-gray-200 flex-1 max-w-[200px] flex items-center gap-1">
             <span className="text-xs">🔒</span> manage-task.dev
          </div>
        </div>

        {/* พื้นที่ใส่รูปภาพโปรเจกต์ */}
        <div className="aspect-[16/9] bg-white flex items-center justify-center text-black relative">
          
          {/* TODO: นำรูปภาพโปรเจกต์ของคุณ (เช่น project-image.jpg) ไปใส่ไว้ในโฟลเดอร์ public 
            จากนั้นลบ <p> ด้านล่างนี้ออก แล้วใช้ Tag <img> แบบตัวอย่างด้านล่างแทนครับ:
            <img src="/project-image.jpg" alt="Manage Task App" className="w-full h-full object-cover" />
          */}
          
          <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg m-4">
            <p className="text-sm text-gray-500 font-medium mb-2">พื้นที่สำหรับใส่รูปภาพโปรเจกต์</p>
            <p className="text-xs text-gray-400">
              นำรูปไปใส่ในโฟลเดอร์ <b>public</b><br/>
              แล้วใช้แท็ก <code>&lt;img src="/ชื่อรูป.png" /&gt;</code> แทนที่กล่องนี้ครับ
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
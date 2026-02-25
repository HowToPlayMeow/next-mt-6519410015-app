export default function ContactMe() {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      {/* ส่วนหัว Contact Me */}
      <h1 className="text-4xl text-white font-bold mb-2">Contact <span className="text-[#FF8A00]">Me</span></h1>
      <p className="text-gray-400 text-sm mb-10">Let's get in touch!</p>

      {/* ฟอร์มติดต่อ */}
      <form className="flex flex-col gap-6 max-w-2xl w-full">
        
        {/* แถวที่ 1: Email กับ Phone */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[#FF8A00] text-xs font-medium">Email</label>
            <input 
              type="email" 
              className="bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#FF8A00] pb-2 transition-colors" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#FF8A00] text-xs font-medium">Phone</label>
            <input 
              type="tel" 
              className="bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#FF8A00] pb-2 transition-colors" 
            />
          </div>
        </div>

        {/* แถวที่ 2: Name กับ Address */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[#FF8A00] text-xs font-medium">Name</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#FF8A00] pb-2 transition-colors" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#FF8A00] text-xs font-medium">Address</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#FF8A00] pb-2 transition-colors" 
            />
          </div>
        </div>

        {/* แถวที่ 3: Content (ช่องเดียวฝั่งซ้าย) */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[#FF8A00] text-xs font-medium">Content</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-[#FF8A00] pb-2 transition-colors" 
            />
          </div>
        </div>

        {/* Checkbox ยอมรับรับข่าวสาร */}
        <div className="flex items-center gap-3 mt-4">
          <input type="checkbox" id="newsletter" className="w-4 h-4 accent-[#FF8A00] cursor-pointer" />
          <label htmlFor="newsletter" className="text-gray-400 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
            I want to subscribe the newsletter.
          </label>
        </div>

        {/* ปุ่ม Submit (ขนาดความกว้างเท่ากับช่องกรอกฝั่งซ้าย) */}
        <div className="grid grid-cols-2 gap-10 mt-2">
          <button type="button" className="bg-[#FF8A00] text-white font-medium py-2.5 rounded-full hover:bg-[#e67e00] transition-all duration-300 w-full cursor-pointer">Submit</button>
        </div>

      </form>
    </div>
  );
}
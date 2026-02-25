import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Next.js Midterm Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} bg-[#121212] text-white min-h-screen flex items-center justify-center p-4`}>
        {/* Main Container */}
        <div className="flex w-full max-w-5xl gap-6 items-center justify-center">
          
          {/* ซ้าย: โปรไฟล์ */}
          <MyCard />

          {/* กลาง: เนื้อหาที่เปลี่ยนไปตามหน้า */}
          <main className="flex-1 h-[600px] rounded-[30px] p-10 shadow-lg overflow-y-auto">
            {children}
          </main>

          {/* ขวา: เมนู */}
          <SideMenu />

        </div>
      </body>
    </html>
  );
}
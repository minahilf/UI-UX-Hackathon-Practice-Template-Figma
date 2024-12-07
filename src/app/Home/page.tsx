import Image from "next/image";
import apple from "../../../Assets/apple.png";
import iphone from "../../../Assets/iphone.png";
import shoparrow from "../../../Assets/shoparrow.png";
import SideBar from "../Components/Sidebar";

export default function HomePage() {
  return (
    <div className="sm:flex lg:flex md:flex">
      <SideBar />

      <div className="bg-text2 p-8 m-[10px] h-auto sm:w-[650px] sm:h-[350px] sm:mt-[32px] sm:ml-[32px] lg:w-[650px] lg:ml-[32px] lg:mt-[32px] xl:w-[800px] xl:ml-[32px] xl:mt-[32px]">
        <div>
          <div className="flex items-center gap-4">
            <Image src={apple} alt="logo" className="w-10 h-10" />
            <p className="text-[16px] text-text">iPhone 14 Series</p>
          </div>

          <div className="flex flex-col sm:flex-row mt-4">
            <div className="flex flex-col justify-between">
              <h1 className="text-[28px] text-text font-semibold lg:text-[40px] lg:mt-5 xl:text-[48px] sm:text-[38px] sm:mt-4">Up to 10% off Voucher</h1>
              <div className="flex gap-2 items-center">
                <p className="text-lg text-text underline">Shop Now</p>
                <Image src={shoparrow} alt="iPhone" className="w-4 h-4" />
              </div>
            </div>
            <Image src={iphone} alt="iPhone" className="ml-auto mt-4 w-[300px] sm:w-[300px]" />
          </div>

          <div className="flex gap-2 items-center justify-center mt-5">
            <div className="bg-text1 w-3 h-3 rounded-full hover:border hover:border-text1 hover:bg-secondary2 cursor-pointer"></div>
            <div className="bg-text1 w-3 h-3 rounded-full hover:border hover:border-text1 hover:bg-secondary2 cursor-pointer"></div>
            <div className="bg-text1 w-3 h-3 rounded-full hover:border hover:border-text1 hover:bg-secondary2 cursor-pointer"></div>
            <div className="bg-text1 w-3 h-3 rounded-full hover:border hover:border-text1 hover:bg-secondary2 cursor-pointer"></div>
            <div className="bg-text1 w-3 h-3 rounded-full hover:border hover:border-text1 hover:bg-secondary2 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

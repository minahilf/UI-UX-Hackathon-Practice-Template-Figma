import Image from "next/image";
import left from "../../../Assets/left.png"
import righta from "../../../Assets/righta.png"
import phone from "../../../Assets/phone.png"
import comp from "../../../Assets/pc.png"
import watch from "../../../Assets/watch.png"
import cam from "../../../Assets/cam.png"
import head from "../../../Assets/head.png"
import gaming from "../../../Assets/videogame.png"

export default function Categories(){
    return(
        <div>
        <div className="flex items-center gap-2 mt-10">
            <div className="bg-secondary2 h-8 w-4 ml-10"></div>
            <p className="text-[14px] font-semibold text-secondary2">Categories</p>
        </div>

        <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:gap-[40%]  ">
        <h1 className="text-[28px] font-semibold text-text2 text-center xl:ml-[3%] xl:text-[32px] lg:ml-[4%] lg:text-[32px] sm:ml-[5%]">Browse By Category</h1>

        <div className="flex gap-4 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[25%]">
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={left} alt="arrow" className="w-3 h-3 mt-2 ml-2" /></div>
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={righta} alt="arrow" className="w-3 h-3 mt-2 ml-2"/></div>
        </div>
        </div>

        <div className="flex overflow-x-scroll scrollbar-hide gap-4 mt-10 lg:justify-center xl:justify-center">
            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center ml-4"> <Image src={phone} alt="phone" className="w-[60px] h-[60px]" />
            <p className="text-[14px] text-text2">Phones</p> </div>

            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center"> <Image src={comp} alt="phone" className="w-[60px] h-[60px]" />
            <p className="text-[14px] text-text2">Computers</p> </div>

            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center"> <Image src={watch} alt="phone" className="w-[60px] h-[60px]" />
            <p className="text-[14px] text-text2">Smartwatch</p> </div>

            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center"> <Image src={cam} alt="phone" className="w-[60px] h-[60px] invert" />
            <p className="text-[14px] text-text2">Camera</p> </div>

            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center"> <Image src={head} alt="phone" className="w-[60px] h-[60px]" />
            <p className="text-[14px] text-text2">HeadPhones</p> </div>

            <div className="min-w-[140px] h-[120px] border border-text flex flex-col justify-center items-center"> <Image src={gaming} alt="phone" className="w-[60px] h-[60px]" />
            <p className="text-[14px] text-text2">Gaming</p> </div>
        </div>

        <div className="border-b-2 bg-text1 mt-8"></div>

        </div>
    )
}
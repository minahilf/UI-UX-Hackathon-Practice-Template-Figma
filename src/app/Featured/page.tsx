import Image from "next/image"
import play from "../../../Assets/play.png"
import woman from "../../../Assets/woman.png"
import speaker from "../../../Assets/speaker.png"
import perfume from "../../../Assets/perfume.png"

export default function Featured() {
    return (
        <div>
            <div className="flex items-center gap-2 mt-10">
                <div className="bg-secondary2 h-8 w-4 ml-10"></div>
                <p className="text-[14px] font-semibold text-secondary2">Featured</p>
            </div>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:gap-[40%]  ">
                <h1 className="text-[28px] font-semibold text-text2 text-center xl:ml-[3%] xl:text-[32px] lg:ml-[4%] lg:text-[32px] sm:ml-[5%]">New Arrivals</h1>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center mt-10">
                <div className="bg-text2 h-[300px] w-[300px] rounded-sm mb-6 sm:mb-0 sm:h-[350px] sm:w-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]">
                    <Image src={play} alt="play" className="h-[200px] w-[300px] mt-[33%] sm:mt-[14%] sm:h-[300px] lg:w-[350px] lg:h-[300px] lg:relative lg:top-[11%] xl:w-[450px] xl:h-[450px]" />
                    <div className="relative bottom-[30%] left-4 sm:bottom-[26%] lg:bottom-[14%] xl:bottom-[10%] xl:left-6">
                        <p className="font-semibold text-text text-[14px] lg:text-[18px] xl:text-[22px]">Play Station 5</p>
                        <p className="text-text text-[12px] xl:text-[16px]">Black and White version of the PS5 <br /> coming out on sale.</p>
                        <p className="font-medium text-text text-[14px] underline xl:text-[16px]">Shop Now</p>
                    </div>
                </div>

                <div className="bg-text2 w-[300px] h-[200px] mt-6 relative sm:ml-4 sm:w-[350px] lg:w-[400px] xl:w-[600px] rounded-sm mb-6 sm:mb-0 xl:mb-10">
                    <Image src={woman} alt="woman" className="w-full absolute top-1 left-0 z-10" /> 
                    <div className="relative top-[90px] left-0 w-full p-4 z-20 sm:top-[130px] lg:top-[145px] xl:top-[260px]">
                        <p className="font-semibold text-text text-[14px] lg:text-[18px] xl:text-[22px]">Women’s Collections</p>
                        <p className="text-text text-[12px] xl:text-[16px]">Featured woman collections that <br /> give you another vibe.</p>
                        <p className="font-medium text-text text-[14px] underline xl:text-[16px]">Shop Now</p>
                    </div>
                </div>

                <div className="bg-text2 w-[300px] h-[200px] flex flex-col items-center justify-center mb-6 sm:mb-0 sm:mr-[8%]  sm:w-[350px] lg:w-[400px] lg:mr-[6%] xl:w-[500px]">
                    <Image src={speaker} alt="speaker" className="w-[150px] relative top-8" />
                     <div className="flex flex-col relative right-[20%] bottom-[12%] sm:right-[26%] lg:bottom-[16%] lg:right-[24%] xl:right-[28%]">
                        <p className="font-semibold text-text text-[14px] lg:text-[16px] xl:text-[20px] ">Speakers</p>
                        <p className="text-text text-[12px] lg:text-[14px] xl:text-[16px]">Amazon wireless speakers</p>
                        <p className="font-medium text-text text-[14px] underline xl:text-[16px]">Shop Now</p>
                    </div>
                </div>
                <div className="bg-text2 w-[300px] h-[200px] flex flex-col items-center justify-center mb-6 lg:w-[360px] xl:mt-4 xl:w-[500px] xl:ml-[9%]">
                    <Image src={perfume} alt="perfume" className="w-[150px] relative top-8" />
                    <div className="flex flex-col relative right-[20%] bottom-[10%] lg:right-[22%] xl:right-[26%]">
                        <p className="font-semibold text-text text-[14px] xl:text-[20px]">Perfume</p>
                        <p className="text-text text-[12px] xl:text-[16px]">GUCCI INTENSE OUD EDP</p>
                        <p className="font-medium text-text text-[14px] underline xl:text-[16px]">Shop Now</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
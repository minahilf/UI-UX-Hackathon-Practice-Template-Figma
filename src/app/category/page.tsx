import Image from "next/image"
import blur from "../../../Assets/blur.png"
import boom from "../../../Assets/boom.png"

export default function Category(){
    return(
        <div className="bg-text2 h-[550px] xl:h-[500px] lg:h-[400px] mt-10 relative flex flex-col sm:flex-row xl:gap-[18%] sm:h-[350px]">

<div className="flex flex-col w-full md:w-[500px] md:pr-8 xl:mt-[5%] lg:mt-6">
            <p className="text-button1 text-[16px] font-semibold text-center mt-8 xl:text-start xl:ml-[18%] lg:text-start lg:ml-[15%] sm:text-start sm:ml-[10%]">Categories</p>
            <h1 className="text-text text-[32px] text-center mt-4 font-semibold xl:text-start xl:ml-[18%] xl:text-[42px] lg:text-start lg:ml-[15%] sm:text-start sm:ml-[10%]">Enhance Your Music Experience</h1>

            <div className="flex gap-6 justify-center mt-4 xl:justify-start xl:ml-[18%] lg:ml-[15%] lg:justify-start sm:justify-start sm:ml-[10%]">
            <div className="bg-primary text-text2 text-[14px] font-semibold w-[60px] h-[60px] text-center rounded-full flex flex-col justify-center items-center">
                <span className="text-[16px] font-extrabold">23</span>
                <span className="text-[12px] ">Hours</span>
            </div>
            <div className="bg-primary text-text2 text-[14px] font-semibold w-[60px] h-[60px] text-center rounded-full flex flex-col justify-center items-center">
                <span  className="text-[16px] font-extrabold">05</span>
                <span  className="text-[12px] ">Days</span>
            </div>
            <div className="bg-primary text-text2 text-[14px] font-semibold w-[60px] h-[60px] text-center rounded-full flex flex-col justify-center items-center">
                <span  className="text-[16px] font-extrabold">59</span>
                <span  className="text-[12px] ">Minutes</span>
            </div>
            <div className="bg-primary text-text2 text-[14px] font-semibold w-[60px] h-[60px] text-center rounded-full flex flex-col justify-center items-center">
                <span  className="text-[16px] font-extrabold">35</span>
                <span  className="text-[12px] ">Seconds</span>
            </div>
            </div>
            <div className="flex items-center justify-center xl:ml-[18%] xl:justify-start lg:justify-start lg:ml-[16%] sm:justify-start sm:ml-[10%]">
 <button className="bg-button1 w-[140px] h-[40px] rounded text-text text-[14px] mt-6 ">Buy Now!</button>
 </div>
 </div>
 {/* right  */}
 <div>
            <div className="flex justify-center items-center mt-10 sm:mr-[20px] sm:mt-[25%] lg:mt-10 xl:mt-[16%]">
<Image src={boom} alt="boom"  className="w-[300px] lg:w-[500px] xl:w-[600px]"/>
            </div>
            </div>
            
           

        </div>
    )
}
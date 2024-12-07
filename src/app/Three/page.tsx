import Image from "next/image"
import van from "../../../Assets/van.png"
import service from "../../../Assets/service.png"
import secure from "../../../Assets/secure.png"
import top from "../../../Assets/top.png"


export default function Offer(){
    return(
        <div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 mb-6 gap-10">

            <div className="flex justify-center items-center flex-col mt-6">
                <div className="w-[70px] h-[70px] rounded-full bg-text1 flex justify-center items-center">
                    <div className="bg-text2 w-[50px] rounded-full h-[50px] flex justify-center items-center">
                        <Image src={van} alt="van" className="w-[35px]"/>
                    </div>
                </div>
                <h4 className="text-[16px] font-semibold text-text2 mt-4 text-center">FREE AND FAST DELIVERY</h4>
                <p className="text-[12px] text-text2  text-center">Free delivery for all orders over $140</p>
            </div>

            <div className="flex justify-center items-center flex-col mt-6">
                <div className="w-[70px] h-[70px] rounded-full bg-text1 flex justify-center items-center">
                    <div className="bg-text2 w-[50px] rounded-full h-[50px] flex justify-center items-center">
                        <Image src={service} alt="van" className="w-[35px]"/>
                    </div>
                </div>
                <h4 className="text-[16px] font-semibold text-text2 mt-4 text-center">24/7 CUSTOMER SERVICE</h4>
                <p className="text-[12px] text-text2  text-center">Friendly 24/7 customer support</p>
            </div>

            <div className="flex justify-center items-center flex-col mt-6">
                <div className="w-[70px] h-[70px] rounded-full bg-text1 flex justify-center items-center">
                    <div className="bg-text2 w-[50px] rounded-full h-[50px] flex justify-center items-center">
                        <Image src={secure} alt="van" className="w-[35px]"/>
                    </div>
                </div>
                <h4 className="text-[16px] font-semibold text-text2 mt-4 text-center">MONEY BACK GUARANTEE</h4>
                <p className="text-[12px] text-text2  text-center">We reurn money within 30 days</p>
            </div>
        </div>
        <div className="bg-text w-8 h-8 rounded-full flex justify-center items-center relative left-[90%] mb-2 sm:left-[98%] lg:left-[96%] xl:left-[97%]">
            <Image src={top} alt="top" />
        </div>
        </div>
    )
}
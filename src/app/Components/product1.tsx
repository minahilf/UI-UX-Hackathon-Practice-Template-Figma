import Image from "next/image";
import keyboard from "../../../Assets/keyboard.png"
import stary from "../../../Assets/stary.png"
import starb from "../../../Assets/starb.png"
import like from "../../../Assets/like.png"
import visible from "../../../Assets/visible.png"

export default function Product1(){
    return(
        <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center mt-10">
          <div className=" bg-secondary h-[200px] w-[200px]">
              
              <div className="flex justify-between items-center">
              <div className="bg-secondary2 h-7 w-[60px] text-center text-text text-[14px] rounded ml-2  pt-1 pb-0 ">-35%</div>

              <div>
                  <div className="bg-primary h-6 w-6 rounded-full mt-2 mr-2 mb-1"><Image src={like} alt="like"  className="w-5 h-5 pt-2 pl-1"/></div>
             <div className="bg-primary h-6 w-6 rounded-full pt-1"> <Image src={visible} alt="eye" className="w-4 h-4 ml-1" /></div>
              </div>
              
              </div>
              <div className="flex justify-center flex-col items-center">
              <Image src={keyboard} alt="game" className="w-[140px] " />
              <div className="h-10 w-full bg-text2 mt-[12%] flex justify-center items-center">
              <p className="text-primary text-center text-[14px]">Add To Cart</p>
              </div>
              </div>
             
          </div>
              </div>
              <div >
              <p className="text-[14px] font-semibold text-text2 mt-2">AK-900 Wired Keyboard</p>
              <div className="flex gap-4 ">
              <div className="text-[14px] text-secondary2 font-medium">$960</div>
              <div className="text-[14px] text-text1 line-through">$1160</div>
              </div>
              <div className="flex gap-1 mt-1">
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3" />
                  <Image src={starb} alt="star" className="w-3 h-3" />
                  <p className="text-[12px] font-semibold text-text1 ml-1">(75)</p>
              </div>
              </div>
              </div>
    )
}
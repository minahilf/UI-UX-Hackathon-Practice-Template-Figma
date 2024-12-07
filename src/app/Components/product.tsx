import stary from "../../../Assets/stary.png"
import like from "../../../Assets/like.png"
import visible from "../../../Assets/visible.png"
import vg from "../../../Assets/vg.png"
import Image from "next/image"

 export default function Product(){
    return(
        <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center mt-10">
          <div className=" bg-secondary h-[200px] w-[200px]">
              
              <div className="flex justify-between items-center">
              <div className="bg-secondary2 h-7 w-[60px] text-center text-text text-[14px] rounded ml-2  pt-1 pb-0 ">-40%</div>

              <div>
                  <div className="bg-primary h-6 w-6 rounded-full mt-2 mr-2 mb-1"><Image src={like} alt="like"  className="w-5 h-5 pt-2 pl-1"/></div>
             <div className="bg-primary h-6 w-6 rounded-full pt-1"> <Image src={visible} alt="eye" className="w-4 h-4 ml-1" /></div>
              </div>
              
              </div>
              <div className="flex justify-center items-center">
              <Image src={vg} alt="game" className="w-[120px]" />
              </div>
             
          </div>
              </div>
              <div >
              <p className="text-[14px] font-semibold text-text2 mt-2">HAVIT HV-G92 Gamepad</p>
              <div className="flex gap-4 ">
              <div className="text-[14px] text-secondary2 font-medium">$120</div>
              <div className="text-[14px] text-text1 line-through">$160</div>
              </div>
              <div className="flex gap-1 mt-1">
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <Image src={stary} alt="star" className="w-3 h-3" />
                  <Image src={stary} alt="star" className="w-3 h-3"/>
                  <p className="text-[12px] font-semibold text-text1 ml-1">(88)</p>
              </div>
              </div>
              </div>
    )
}
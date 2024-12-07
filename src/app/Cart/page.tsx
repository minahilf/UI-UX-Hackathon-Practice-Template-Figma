import vg from "../../../Assets/vg.png"
import lcd from "../../../Assets/lcd.png"
import cancel from "../../../Assets/cancel.png"
import Image from "next/image"
import Quantity from "../../../Assets/Quantity.png"
import q1 from "../../../Assets/q1.png"

export default function Cart(){
    return(
        <div>
        <div className="mt-10 ml-[5%] ">
            <p className="text-[16px] text-text1">Home / Cart</p>
        </div>
        <div className="flex flex-col gap-6">
        <div className=" bg-white shadow-sm backdrop-blur-sm w-auto">
            <ul className="text-[16px] flex justify-center items-center gap-8 p-4 sm:justify-evenly"> 
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
            </ul>
        </div>

        <div className=" bg-white shadow-sm backdrop-blur-sm w-auto">
            <ul className="text-[14px] flex justify-center items-center gap-10 p-4 sm:justify-evenly"> 
            <li className="text-[14px]"><div>
                    <Image src={cancel} alt="" className="w-4 relative right-2 top-2"/>
              <Image src={lcd} alt="" className="w-10"/>
                </div>
                <p className="text-[12px] text-center">LCD Monitor</p>
                </li>
                <li >$650</li>
                <li>
                    <Image src={Quantity} alt="" className="w-10"/>
                </li>
                <li>$650</li>
            </ul>
        </div>

        
        <div className=" bg-white shadow-sm backdrop-blur-sm w-auto">
            <ul className="text-[14px] flex justify-center items-center gap-10 p-4 sm:justify-evenly"> 
            <li className="text-[14px]">
              <Image src={vg} alt="" className="w-10"/>
                <p className="text-[12px] text-center">H1 Gamepad</p>
                </li>
                <li>$550</li>
                <li>
                    <Image src={q1} alt="" className="w-10"/>
                </li>
                <li>$1150</li>
            </ul>
        </div>
        </div>
        <div className="flex justify-between gap-2">
            <div className="bg-transparent border border-text2 w-[160px] h-[50px] rounded flex justify-center items-center mt-6 ml-6">
                <button className="text-[14px] font-medium">Return To Shop</button>
            </div>

            <div className="bg-transparent border border-text2 w-[160px] h-[50px] rounded flex justify-center items-center mt-6 mr-6">
                <button className="text-[14px] font-medium">Update Cart</button>
            </div>
            
      
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:gap-[12%] lg:gap-[32%] xl:gap-[52%]">
        <div className="mt-10 flex gap-2 sm:mt-[-12em] ">
                <input type="text" name="code" id="code" placeholder="Coupon Code" className="bg-transparent border border-text2 w-[160px] h-[40px] rounded flex justify-center items-center p-4 sm:w-[180px] "/>
                <div className="bg-secondary2  w-[140px] h-[40px] rounded flex justify-center items-center">
                <button className="text-[14px] text-text font-medium">Apply Coupon</button>
            </div>
            </div>

            <div className="border border-text2 w-[270px] h-[260px] mt-6 p-4">
                <p className="font-medium text-[18px]">Cart Total</p>
                <div className="flex justify-between mt-4 clas">
                    <p className="text-[14px]">Subtotal:</p>
                    <p className="text-[14px]">$1750</p>
                </div>
                <div className="border border-b mt-2 border-text"></div>
                <div className="flex justify-between mt-4 clas">
                    <p className="text-[14px]">Shipping:</p>
                    <p className="text-[14px]">Free</p>
                </div>
                <div className="border border-b mt-2 border-text"></div>
                <div className="flex justify-between mt-4 clas">
                    <p className="text-[14px]">Total:</p>
                    <p className="text-[14px]">$1750</p>
                </div>
                <div className="bg-secondary2  w-[180px] h-[40px] rounded flex justify-center items-center mt-4 ml-6">
                <button className="text-[14px] text-text font-medium">Process to checkout</button>
            </div>
            </div>
           
            </div>
        </div>
    )
}
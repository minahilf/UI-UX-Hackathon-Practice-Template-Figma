import Image from "next/image"
import app from "../../../Assets/appstore.png"
import playstore from "../../../Assets/playstore.png"
import fb from "../../../Assets/fb.png"
import tweet from "../../../Assets/twitte.png"
import insta from "../../../Assets/insta.png"
import link from "../../../Assets/in.png"
import submit from "../../../Assets/submit.png"
import qr from "../../../Assets/Qr.png"


export default function Footer(){
    return(
        <div className="bg-text2 w-auto mt-6 pb-4">
        <div className=" grid grid-col-1 sm:grid-cols-3 lg:grid-cols-5 p-10">
            <div className="flex flex-col  gap-4 ml-6 ">
                <h4 className="text-[22px] font-bold text-text mt-6">Exclusive</h4>
                <ul className="text-text text-[16px] flex flex-col gap-4">
                    <li className="font-medium">Subscribe</li>
                    <li>Get 10% off your first order</li>
                </ul>
                <div className="flex items-center">
                <input type="text" placeholder="Enter your email" className="text-text text-[14px] border border-text bg-transparent p-4 w-[200px] h-[40px] sm:w-[150px] sm:text-[10px]" />
                <Image src={submit} alt="submit" className="w-6 h-6 relative right-10 sm:w-4 sm:h-4"/>
                </div>
            </div>

            <div className="flex flex-col ml-6">
                <h4 className="text-text text-[18px] font-semibold list-none mt-6 mb-2 ">Support</h4>
                <ul className="text-text text-[16px] flex flex-col gap-4">
                    <li>123, Street Near This School, <br /> Hyderabad Pakistan</li>
                    <li>minahil123@gmail.com</li>
                    <li>+92-3446736829</li>
                </ul>
            </div>

            <div className="flex flex-col ml-6">
                <h4 className="text-text text-[18px] font-semibold list-none mt-6 mb-2 ">Account</h4>
                <ul className="text-text text-[16px] flex flex-col gap-2">
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="flex flex-col ml-6">
            <h4 className="text-text text-[18px] font-semibold list-none mt-6 mb-2 ">Quick Link</h4>
                <ul className="text-text text-[16px] flex flex-col gap-4">
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex flex-col ml-6">
            <h4 className="text-text text-[18px] font-semibold list-none mt-6 mb-2 ">Download App</h4>
            <p className="text-text text-[12px] font-medium">Save $3 with App New User Only</p>
            <div className="flex items-center gap-2 mt-2">
                <Image src={qr} alt="qr" />
                <div className="flex flex-col gap-2">
                    <Image src={playstore} alt="play" />
                    <Image src={app} alt="app" />
                </div>
            </div>
            </div>
            <div className="flex gap-4 items-center ml-4 mt-4">
                <Image src={fb} alt="fb"/>
                <Image src={tweet} alt="fb"/>
                <Image src={insta} alt="fb"/>
                <Image src={link} alt="fb"/>
            </div>
        </div>
        <div className="w-full border-t border-text mt-6 px-4 sm:px-6 lg:px-8"></div>
<p className="text-text text-[12px] text-center mt-2 
    sm:text-sm 
    md:text-sm 
    lg:text-sm 
    xl:text-sm
    tracking-tight">&copy; Copyright GIAIC Hackathon 2025. All rights reserved</p>
       </div>
    )
}
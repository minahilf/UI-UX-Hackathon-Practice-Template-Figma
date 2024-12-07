import Image from "next/image";
import downarrow from "../../../Assets/down arrow.png";
import mg from "../../../Assets/mg.png";
import like from "../../../Assets/like.png";
import cart from "../../../Assets/Cart.png";
import Link from "next/link";
import Wishlist from "../Wishlist/page";
import Cart from "../Cart/page";
export default function Header() {
  return (
    <div>
      {/* HEADER1 */}
      <div className="flex items-center justify-center bg-text2 pt-2 pb-2 sm:flex-row sm:justify-center sm:h-[40px] ">
        <div className="flex flex-col items-center gap-2 max-w-screen-lg  sm:flex-row sm:items-center ">
          <p className="text-text text-[12px] pl-2  text-center  sm:text-[14px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            className="text-text text-[14px] font-semibold underline "
            href=""
          >
            Shop Now
          </Link>

          <div className="flex items-center gap-2 sm:mt-0  sm:relative sm:left-[10%] lg:relative lg:left-[25%] xl:relative xl:left-[40%]">
            <p className="text-text text-[14px]">English</p>
            <Image src={downarrow} alt="arrow" className="w-3" />
          </div>
        </div>
      </div>

      {/* HEADER2 */}
      <div className="h-auto bg-primary flex flex-col items-center pt-4 pb-4 border-b-2 border-text sm:flex-row sm:h-[80px] sm:items-center sm:pl-[7%] sm:w-full">
        <h4 className="text-[20px] font-bold text-text2 mb-4 sm:text-[20px] sm:mr-[6%] sm:mb-0 lg:mr-[6%]">
          Exclusive
        </h4>
        <ul className="flex  items-center gap-4 sm:flex-row sm:gap-[40px] xl:relative xl:left-[8%] ">
        <Link href="/" > <li className="text-[16px] text-text2">Home</li> </Link> 
          <li className="text-[16px] text-text2">Contact</li>
          <li className="text-[16px] text-text2">About</li>
          <li className="text-[16px] text-text2">Sign Up</li>
        </ul>

        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row sm:ml-[16%] sm:mt-0 sm:gap-6 xl:ml-[30%]">
          <div className="relative sm:max-w-none">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-secondary text-[14px] text-text2 rounded-[4px] pr-10 pl-4 pt-2 pb-2"
            />
            <div className="absolute right-3 top-3">
              <Image src={mg} alt="search" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/Wishlist" >
            <Image src={like} alt="like" className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link href="/Cart">
            <Image src={cart} alt="cart" className="w-6 h-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
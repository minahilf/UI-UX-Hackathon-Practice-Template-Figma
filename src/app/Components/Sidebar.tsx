import Image from "next/image";
import right from "../../../Assets/right.png";

export default function SideBar() {
    return (
        <div className="h-auto border-r-2 border-text p-10 ml-10 w-[20%] hidden md:block lg:w-[26%]">
            <ul className="flex flex-col gap-[12px]">
                <li className="flex items-center gap-[26%]">
                    <span className="text-[16px] font-sans text-text2">Womans Fashion</span>
                    <Image src={right} alt="arrow" className="w-2 h-3" />
                </li>
                <li className="flex items-center gap-[34%]">
                    <span className="text-[16px] font-sans text-text2">Mans Fashion</span>
                    <Image src={right} alt="arrow" className="w-2 h-3" />
                </li>
                <li className="text-[16px] font-sans text-text2">Electronics</li>
                <li className="text-[16px] font-sans text-text2">Home & Lifestyle</li>
                <li className="text-[16px] font-sans text-text2">Medicine</li>
                <li className="text-[16px] font-sans text-text2">Sports & Outdoor</li>
                <li className="text-[16px] font-sans text-text2">Babys & Toys</li>
                <li className="text-[16px] font-sans text-text2">Groceries & Pets</li>
                <li className="text-[16px] font-sans text-text2">Health & Beauty</li>
            </ul>
        </div>
    );
}

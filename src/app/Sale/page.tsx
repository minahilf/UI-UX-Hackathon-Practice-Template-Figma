import Image from "next/image";
import left from "../../../Assets/left.png"
import righta from "../../../Assets/righta.png"
import Timer from "../Components/timer";
import Product from "../Components/product";
import Product1 from "../Components/product1";
import Product2 from "../Components/product2";
import Product3 from "../Components/product3";

export default function Sale(){
    return(
        <div>
        <div className="flex items-center gap-2 mt-10">
            <div className="bg-secondary2 h-8 w-4 ml-10"></div>
            <p className="text-[14px] font-semibold text-secondary2">Today's</p>
        </div>

        <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:gap-[10%]  ">
        <h1 className="text-[28px] font-semibold text-text2 text-center ml-10 xl:text-[32px] lg:text-[30px] sm:text-[26px]">Flash Sales</h1>
<Timer/>

<div className="flex gap-4 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[30%]">
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={left} alt="arrow" className="w-3 h-3 mt-2 ml-2" /></div>
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={righta} alt="arrow" className="w-3 h-3 mt-2 ml-2"/></div>
        </div>
        </div>

        <div className="flex overflow-x-scroll scrollbar-hide gap-4 ml-4">
       <Product/>
       <Product1/>
       <Product2/>
       <Product3/>
       <Product3/>
       <Product3/>
       <Product3/>
       </div>

<div className="flex items-center justify-center">
 <button className="bg-secondary2 w-[180px] h-[40px] rounded text-text text-[14px] mt-6">View All Products</button>
 </div>

 <div className="border-b-2 bg-text1 mt-8"></div>

        </div>
        
    )
}

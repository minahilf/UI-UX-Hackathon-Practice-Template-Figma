import Image from "next/image";
import left from "../../../Assets/left.png"
import righta from "../../../Assets/righta.png"
import dog from "../../../Assets/dog.png"
import dslr from "../../../Assets/dslr.png"
import laptop from "../../../Assets/laptop.png"
import skin from "../../../Assets/skin.png"
import car from "../../../Assets/car.png"
import shoes from "../../../Assets/shoes.png"
import game from "../../../Assets/joy.png"
import jacket from "../../../Assets/jacket.png"
import stary from "../../../Assets/stary.png";
import half from "../../../Assets/star-half-filled.png"
import starb from "../../../Assets/starb.png"
import like from "../../../Assets/like.png";
import visible from "../../../Assets/visible.png";

export default function Products(){
    return(
        <div>
        <div className="flex items-center gap-2 mt-10">
            <div className="bg-secondary2 h-8 w-4 ml-10"></div>
            <p className="text-[14px] font-semibold text-secondary2">Our Products</p>
        </div>

        <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:gap-[40%]  ">
        <h1 className="text-[28px] font-semibold text-text2 text-center xl:ml-[3%] xl:text-[32px] lg:ml-[4%] lg:text-[32px] sm:ml-[5%]">Explore Our Products</h1>

        <div className="flex gap-4 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[25%]">
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={left} alt="arrow" className="w-3 h-3 mt-2 ml-2" /></div>
            <div className="bg-secondary rounded-full h-7 w-7"><Image src={righta} alt="arrow" className="w-3 h-3 mt-2 ml-2"/></div>
        </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ml-4 mr-4 mt-10 ">
            {/* product1 */}
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="bg-secondary h-[180px] w-[180px]">
                        <div className="flex flex-col justify-between items-center">
                            <div className="ml-[85%] mt-2">
                                <div className="bg-primary h-6 w-6 rounded-full">
                                    <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                </div>
                                <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                    <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center">
                                <Image src={dog} alt="game" className="w-[100px] h-[100px] mb-[12px] relative bottom-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
                    <p className="text-[14px] font-medium text-text2 mt-2">Breed Dry Dog Food</p>
                    <div className="flex gap-2 items-center">
                        <div className="text-[14px] text-secondary2 font-medium mt-2">$100</div>
                        <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={starb} alt="star" className="w-3 h-3" />
                            <Image src={starb} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(35)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* product2 */}
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="bg-secondary h-[180px] w-[180px]">
                        <div className="flex flex-col justify-between items-center">
                            <div className="ml-[85%] mt-2">
                                <div className="bg-primary h-6 w-6 rounded-full">
                                    <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                </div>
                                <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                    <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                </div>
                            </div>

                            <div className="flex justify-center flex-col items-center">
                                <Image src={dslr} alt="game" className="w-[100px] h-[100px] mb-[12px] relative bottom-7" />
                                <div className="h-10 w-[180px] bg-text2 mt-[-19%] flex justify-center items-center">
                                    <p className="text-primary text-center text-[14px]">Add To Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
                    <p className="text-[12px] font-medium text-text2 mt-2 xl:text-[14px]">CANON EOS DSLR Camera</p>
                    <div className="flex gap-2 items-center">
                        <div className="text-[14px] text-secondary2 font-medium mt-2">$360</div>
                        <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={starb} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(95)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* product3 */}
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="bg-secondary h-[180px] w-[180px]">
                        <div className="flex flex-col justify-between items-center">
                            <div className="ml-[85%] mt-2">
                                <div className="bg-primary h-6 w-6 rounded-full">
                                    <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                </div>
                                <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                    <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={laptop} alt="game" className="w-[100px] h-[100px] mb-[12px] relative bottom-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[22%]">
                    <p className="text-[14px] font-medium text-text2 mt-2">ASUS FHD Gaming Laptop</p>
                    <div className="flex gap-2 items-center">
                        <div className="text-[14px] text-secondary2 font-medium mt-2">$700</div>
                        <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(325)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* product4 */}
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="bg-secondary h-[180px] w-[180px]">
                        <div className="flex flex-col justify-between items-center">
                            <div className="ml-[85%] mt-2">
                                <div className="bg-primary h-6 w-6 rounded-full">
                                    <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                </div>
                                <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                    <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={skin} alt="game" className="w-[100px] h-[100px] mb-[12px] relative bottom-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[22%]">
                    <p className="text-[14px] font-medium text-text2 mt-2">Curology Product Set </p>
                    <div className="flex gap-2 items-center">
                        <div className="text-[14px] text-secondary2 font-medium mt-2">$500</div>
                        <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={starb} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(145)</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* product 5 */}

<div className="flex gap-4 flex-col">
        <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[180px] w-[180px]">
                            <div className="flex flex-col justify-between items-center">
                            <div className="bg-button1 h-7 w-[60px] text-center text-text text-[14px] rounded mr-[50%] pt-1 pb-0 mt-2 ">New</div>
                                <div className="ml-[85%] mt-2 relative bottom-10">
                                    <div className="bg-primary h-6 w-6 rounded-full ">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={car} alt="game" className="w-[100px] h-[100px]  relative bottom-10" />
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
                        <p className="text-[14px] font-medium text-text2 mt-2">Kids Electric Car</p>
                        <div className="flex gap-2 items-center">
                            <div className="text-[14px] text-secondary2 font-medium mt-2">$960</div>
                            <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(65)</p>   
                        </div>
                        </div>

                        <div className="flex gap-2 mt-1">
                                <div className="w-4 h-4 bg-[#FB1314] border-2 border-text2 rounded-full"></div>
                                <div className="w-4 h-4 bg-secondary2 rounded-full"></div>
                            </div>
                      
                    </div>
                </div>
</div>

{/* product6  */}

<div className="flex gap-4 flex-col">
        <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[180px] w-[180px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-1 ">
                                    <div className="bg-primary h-6 w-6 rounded-full ">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={shoes} alt="game" className="w-[120px] h-[100px] " />
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[22%]">
                        <p className="text-[14px] font-medium text-text2 mt-2">Jr. Zoom Soccer Cleats</p>
                        <div className="flex gap-2 items-center">
                            <div className="text-[14px] text-secondary2 font-medium mt-2">$1160</div>
                            <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(35)</p>   
                        </div>
                        </div>

                        <div className="flex gap-2 mt-1">
                                <div className="w-4 h-4 bg-[#EEFF61] border-2 border-text2 rounded-full"></div>
                                <div className="w-4 h-4 bg-secondary2 rounded-full"></div>
                            </div>
                      
                    </div>
                </div>
</div>


{/* product7  */}
<div className="flex  gap-4 flex-col">
        <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[180px] w-[180px]">
                            <div className="flex flex-col justify-between items-center">
                            <div className="bg-button1 h-7 w-[60px] text-center text-text text-[14px] rounded mr-[50%] pt-1 pb-0 mt-2 ">New</div>
                                <div className="ml-[85%] mt-2 relative bottom-10">
                                    <div className="bg-primary h-6 w-6 rounded-full ">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={game} alt="game" className="w-[100px] h-[100px]  relative bottom-10" />
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
                        <p className="text-[12px] font-medium text-text2 mt-2 xl:text-[14px]">GP11 Shooter USB Gamepad</p>
                        <div className="flex gap-2 items-center">
                            <div className="text-[14px] text-secondary2 font-medium mt-2">$660</div>
                            <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={half} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(55)</p>   
                        </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                                <div className="w-4 h-4 bg-text2 border-2 border-text1 rounded-full"></div>
                                <div className="w-4 h-4 bg-secondary2 rounded-full"></div>
                            </div>
                      
                    </div>
                </div>
</div>

{/* prodcut 8 */}
<div className="flex  gap-4 flex-col">
        <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[180px] w-[180px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-1 ">
                                    <div className="bg-primary h-6 w-6 rounded-full ">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={jacket} alt="game" className="w-[120px] h-[100px] " />
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
                        <p className="text-[14px] font-medium text-text2 mt-2">Quilted Satin Jacket</p>
                        <div className="flex gap-2 items-center">
                            <div className="text-[14px] text-secondary2 font-medium mt-2">$1160</div>
                            <div className="flex gap-1 mt-1 items-center">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={half} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(35)</p>   
                        </div>
                        </div>

                        <div className="flex gap-2 mt-1">
                                <div className="w-4 h-4 bg-text2 border-2 border-text1 rounded-full"></div>
                                <div className="w-4 h-4 bg-secondary2 rounded-full"></div>
                            </div>
                      
                    </div>
                </div>    
                </div>
        </div>

        <div className="flex items-center justify-center mt-6">
            <button className="bg-secondary2 w-[180px] h-[40px] rounded text-text text-[14px] mt-6">View All Products</button>
        </div>
    </div>
    )
}
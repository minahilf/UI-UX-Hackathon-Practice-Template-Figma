import Image from "next/image";
import stary from "../../../Assets/stary.png";
import half from "../../../Assets/star-half-filled.png"
import like from "../../../Assets/like.png";
import visible from "../../../Assets/visible.png";
import coat from "../../../Assets/coat.png";
import bag from "../../../Assets/bag.png";
import cooler from "../../../Assets/cooler.png";
import shelf from "../../../Assets/shelf.png";


export default function Selling() {
    return (
        <div>
            <div className="flex items-center gap-2 mt-10">
                <div className="bg-secondary2 h-8 w-4 ml-10"></div>
                <p className="text-[14px] font-semibold text-secondary2">This Month</p>
            </div>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:gap-[40%]">
                <h1 className="text-[28px] font-semibold text-text2 text-center xl:ml-[3%] xl:text-[34px] lg:ml-[4%] lg:text-[32px] sm:ml-[5%] sm:text-[30px]">
                    Best Selling Products
                </h1>

                <div className="flex items-center justify-center lg:ml-[4%] lg:mb-6  xl:ml-[10%] xl:mb-8 sm:ml-[2%]">
                    <button className="bg-secondary2 w-[140px] h-[40px] rounded text-text text-[14px] mt-6">View All</button>
                </div>
            </div>

            <div className="flex overflow-x-scroll scrollbar-hide gap-4 ml-4 lg:justify-center xl:gap-10">
                {/* Product 1 */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[200px] w-[200px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-2">
                                    <div className="bg-primary h-6 w-6 rounded-full">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={coat} alt="game" className="w-[100px]" />
                            </div>
                        </div>
                    </div>

                    <div className="ml-[2%]">
                        <p className="text-[14px] font-semibold text-text2 mt-2">The north coat</p>
                        <div className="flex gap-4">
                            <div className="text-[14px] text-secondary2 font-medium">$260</div>
                            <div className="text-[14px] text-text1 line-through">$360</div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(65)</p>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[200px] w-[200px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-2">
                                    <div className="bg-primary h-6 w-6 rounded-full">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={bag} alt="game" className="w-[100px]" />
                            </div>
                        </div>
                    </div>

                    <div className="ml-[2%]">
                        <p className="text-[14px] font-semibold text-text2 mt-2">Gucci duffle bag</p>
                        <div className="flex gap-4">
                            <div className="text-[14px] text-secondary2 font-medium">$960</div>
                            <div className="text-[14px] text-text1 line-through">$1160</div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={half} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(65)</p>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[200px] w-[200px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-2">
                                    <div className="bg-primary h-6 w-6 rounded-full">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={cooler} alt="game" className="w-[130px] mt-4" />
                            </div>
                        </div>
                    </div>

                    <div className="ml-[2%]">
                        <p className="text-[14px] font-semibold text-text2 mt-2">RGB liquid CPU Cooler</p>
                        <div className="flex gap-4">
                            <div className="text-[14px] text-secondary2 font-medium">$160</div>
                            <div className="text-[14px] text-text1 line-through">$170</div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={half} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(65)</p>
                        </div>
                    </div>
                </div>
                {/* Product 4 */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-center mt-10">
                        <div className="bg-secondary h-[200px] w-[200px]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="ml-[85%] mt-2">
                                    <div className="bg-primary h-6 w-6 rounded-full">
                                        <Image src={like} alt="like" className="w-5 h-5 pt-2 pl-1" />
                                    </div>
                                    <div className="bg-primary h-6 w-6 rounded-full pt-1">
                                        <Image src={visible} alt="eye" className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <Image src={shelf} alt="game" className="w-[100px]" />
                            </div>
                        </div>
                    </div>

                    <div className="ml-[2%]">
                        <p className="text-[14px] font-semibold text-text2 mt-2">Small BookSelf</p>
                            <div className="text-[14px] text-secondary2 font-medium">$260</div>
                        <div className="flex gap-1 mt-1">
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <Image src={stary} alt="star" className="w-3 h-3" />
                            <p className="text-[12px] font-semibold text-text1 ml-1">(65)</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
)
}

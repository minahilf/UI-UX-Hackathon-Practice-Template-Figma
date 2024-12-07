import Image from "next/image";
import stary from "../../../Assets/stary.png";
import visible from "../../../Assets/visible.png";
import bag from "../../../Assets/bag.png";
import cooler from "../../../Assets/cooler.png";
import vg from "../../../Assets/vg.png";
import lcd from "../../../Assets/lcd.png";
import keyboard from "../../../Assets/keyboard.png";
import game from "../../../Assets/joy.png";
import jacket from "../../../Assets/jacket.png";
import laptop from "../../../Assets/laptop.png";
import bin from "../../../Assets/bin.png";
import cart from "../../../Assets/Cart.png"

export default function Wishlist() {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:mt-6 sm:justify-around lg:gap-[20%] xl:gap-[40%]">
        <p className="text-text2 text-[20px] mt-6 text-center sm:mt-0">
          Wishlist(4)
        </p>
        <div className="w-[150px] h-[50px] border border-text2 rounded-md flex justify-center">
          <button className="text-center text-[14px] font-semibold">
            Move All To Bag
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        {/* Product Card */}
        {[bag, cooler, game, jacket].map((product, index) => (
          <div className="flex flex-col" key={index}>
            {/* Product Image Section */}
            <div className="flex items-center justify-center">
              <div className="bg-secondary h-[180px] w-[180px] min-w-[150px] relative">
                {/* Discount Badge */}
                {index === 0 && (
                  <div className="bg-secondary2 h-7 w-[60px] text-center text-text text-[14px] rounded pt-1 pb-0 mr-[6em] mt-1 absolute top-1 left-1">
                    -40%
                  </div>
                )}
                {/* Delete Icon */}
                <div className="absolute top-2 right-2 bg-primary h-6 w-6 rounded-full flex justify-center items-center">
                  <Image
                    src={bin}
                    alt="Remove"
                    className="w-5 h-5"
                  />
                </div>
                {/* Product Image */}
                <div className="flex justify-center flex-col items-center">
                  <Image
                    src={product}
                    alt="Product"
                    className="w-[80px] h-[80px] mb-[20%] mt-8"
                  />
                  {/* Add to Cart Button */}
                  <div className="h-10 m-w-[180px] w-[150px] gap-2 bg-text2 mt-[-3%] flex justify-center items-center sm:w-[160px] lg:w-[180px]">
                    <Image src={cart} alt="" className="invert w-6 h-6"/>
                    <p className="text-primary text-center text-[14px]">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
              <p className="text-[12px] font-medium text-text2 mt-2">
                {index === 0
                  ? "Gucci Duffle Bag"
                  : index === 1
                  ? "RGB Liquid CPU Cooler"
                  : index === 2
                  ? "GP11 Shooter USB Gamepad"
                  : "Quilted Satin Jacket"}
              </p>
              <div className="flex gap-2 items-center">
                <div className="text-[14px] text-secondary2 font-medium">
                  {index === 0
                    ? "$960"
                    : index === 1
                    ? "$1960"
                    : index === 2
                    ? "$550"
                    : "$750"}
                </div>
                {index === 0 && (
                  <div className="text-[14px] text-text1 line-through">
                    $1160
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "Just for You" Section */}
      <div className="flex flex-col gap-5 justify-center items-center mt-10 sm:flex-row sm:justify-around sm:gap-[30%] xl:justify-around xl:gap-[45%]">
        <div className="flex items-center gap-2">
          <div className="bg-secondary2 h-8 w-4 "></div>
          <p className="text-[16px] text-text2">Just for You</p>
        </div>
        <div className="w-[150px] h-[50px] border border-text2 rounded-md flex justify-center ">
                    <button className="text-center text-[14px] font-semibold">See All</button>
      </div>
      </div>


      {/* Products Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
  {/* Product Card */}
  {[laptop, lcd, vg, keyboard].map((product, index) => (
    <div className="flex flex-col" key={index}>
      {/* Product Image Section */}
      <div className="flex items-center justify-center">
        <div className="bg-secondary h-[180px] w-[180px] min-w-[150px] relative">
          {/* Discount Badge */}
          {index === 0 && (
            <div className="bg-secondary2 h-7 w-[60px] text-center text-text text-[14px] rounded pt-1 pb-0 mr-[6em] mt-1 absolute top-1 left-1">
              -35%
            </div>
          )}
          {index === 2 && (
            <div className="bg-button1 h-7 w-[60px] text-center text-text text-[14px] rounded pt-1 pb-0 mr-[6em] mt-1 absolute top-1 left-1">
              New
            </div>
          )}
          {/* Visible Icon */}
          <div className="absolute top-2 right-2 bg-primary h-6 w-6 rounded-full flex justify-center items-center">
            <Image
              src={visible}
              alt="Remove"
              className="w-5 h-5"
            />
          </div>
          {/* Product Image */}
          <div className="flex justify-center flex-col items-center">
            <Image
              src={product}
              alt="Product"
              className="w-[90px] h-[90px] mb-[20%] mt-10"
            />
            {/* Add to Cart Button */}
            <div className="h-10 m-w-[180px] w-[150px] gap-2 bg-text2 mt-[-16%] flex justify-center items-center sm:w-[160px] lg:w-[180px]">
              <Image src={cart} alt="" className="invert w-6 h-6" />
              <p className="text-primary text-center text-[14px]">
                Add To Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center lg:items-start lg:ml-[12%] xl:ml-[23%]">
        <p className="text-[12px] font-medium text-text2 mt-2">
          {index === 0
            ? "ASUS FHD Gaming Laptop"
            : index === 1
            ? "IPS LCD Gaming Monitor"
            : index === 2
            ? "HAVIT HV-G92 Gamepad"
            : "AK-900 Wired Keyboard"}
        </p>
        <div className="flex gap-2 items-center">
          <div className="text-[14px] text-secondary2 font-medium">
            {index === 0
              ? "$960"
              : index === 1
              ? "$1160"
              : index === 2
              ? "$550"
              : "$200"}
          </div>
          {index === 0 && (
            <div className="text-[14px] text-text1 line-through">
              $1160
            </div>
          )}
        </div>
        {/* Star Ratings */}
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
  ))}
</div>
</div>

  );
}

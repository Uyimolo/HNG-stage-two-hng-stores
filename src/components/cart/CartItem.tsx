import watch from "../../assets/images/smartwatch.png";
import bin from "../../assets/icons/bin.svg";
import thumbnail1 from "../../assets/images/thumbnail-1.png";
const CartItem = () => {
  return (
    <div className="h-auto border border-gray p-2 shadow-md lg:px-4">
      <h2 className="font-bold">Cart (1)</h2>
      <div className="flex justify-between gap-2 border-t-2 border-yellow pt-1 lg:py-12">
        {/* column 1 */}
        <div className="flex gap-2 lg:gap-8">
          <div className="w-fit space-y-12 md:space-y-12">
            <img src={watch} alt="" className="w-16 md:w-24 xl:w-32" />
            <div className="flex h-fit space-x-1">
              <img src={bin} alt="" className="w-[14px] md:w-5" />
              <p className="self-end text-[10px] text-primary xs:text-[10px] md:text-xs xl:text-sm">
                Remove
              </p>
            </div>
          </div>

          {/* column 2 */}
          <div className="space-y-6 justify-self-start md:space-y-4 xl:space-y-8">
            <div className="">
              <h3 className="text-[12px] font-bold xs:text-xs md:text-sm xl:text-[18px]">
                Apple Watch SE 2022 40
              </h3>
              <p className="text-[10px] font-bold xs:text-[8px] md:text-xs xl:text-base">
                In Stock
              </p>
            </div>

            <div className="flex space-x-1">
              <div className="relative aspect-[2/1.6] w-8 rounded bg-gray xs:w-10 md:w-14 xl:w-20">
                <img
                  src={thumbnail1}
                  alt=""
                  className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 xs:w-[60%]"
                />
              </div>
              <div className="relative aspect-[2/1.4] w-8 rounded bg-gray xs:w-10 md:w-14 xl:w-20">
                <img
                  src={thumbnail1}
                  alt=""
                  className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[60deg] xs:w-[60%]"
                />
              </div>
              <div className="relative aspect-[2/1.4] w-8 rounded bg-gray xs:w-10 md:w-14 xl:w-20">
                <img
                  src={thumbnail1}
                  alt=""
                  className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[100deg] xs:w-[60%]"
                />
              </div>
              <div className="relative aspect-[2/1.4] w-8 rounded bg-gray xs:w-10 md:w-14 xl:w-20">
                <img
                  src={thumbnail1}
                  alt=""
                  className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[150deg] xs:w-[60%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="flex w-fit flex-col justify-between justify-self-end">
          <p className="text-xs font-extrabold xs:text-xs md:text-sm xl:text-base">
            <span className="line-through decoration-double">N</span>346,000
          </p>

          {/* quantity */}
          <div className="flex space-x-1">
            <button className="grid h-4 w-4 place-content-center bg-primary text-[14px] text-white md:h-5 md:w-5">
              -
            </button>
            <p className="text-xs font-bold xs:text-xs lg:text-sm xl:text-base">
              1
            </p>
            <button className="grid h-4 w-4 place-content-center bg-primary text-[14px] text-white md:h-5 md:w-5">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

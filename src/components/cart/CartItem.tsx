// import watch from "../../assets/images/smartwatch.png";
import { useContext, useState } from "react";
import bin from "../../assets/icons/bin.svg";
import { CartState, Product } from "../../types/types";
import CartContext from "../../context/CartContext";
// import thumbnail1 from "../../assets/images/thumbnail-1.png";
const CartItem = ({ cartItem }: { cartItem: Product }) => {
  const { removeItemFromCart } = useContext<CartState>(CartContext);

  const [count, setCount] = useState<number>(1);
  const handleCount = (mode: "increase" | "decrease") => {
    if (count >= 1 && mode == "increase") {
      setCount((prevCount) => prevCount + 1);
    } else if (count > 1 && mode == "decrease") {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="h-auto border border-gray border-t-yellow px-2 lg:px-4 py-2">
      <div className="flex justify-between gap-2 pt-1 lg:py-6">
        {/* column 1 */}
        <div className="flex gap-2 lg:gap-8">
          <div className="w-fit space-y-4 lg:space-y-6">
            <img
              src={cartItem.image}
              alt=""
              className="w-16 rounded-md border border-gray md:w-24 xl:w-32"
            />
            <div
              className="flex h-fit cursor-pointer space-x-1"
              onClick={() => removeItemFromCart(cartItem.id)}
            >
              <img src={bin} alt="" className="w-[14px] md:w-5" />
              <p className="self-end text-[10px] text-primary xs:text-[10px] md:text-xs xl:text-sm">
                Remove
              </p>
            </div>
          </div>

          {/* column 2 */}
          <div className="justify-self-start">
            <div className="">
              <h3 className="text-[12px] font-bold xs:text-xs md:text-sm xl:text-[18px]">
                {cartItem.title}
              </h3>
              <p className="text-[10px] font-bold xs:text-[8px] md:text-xs xl:text-base">
                In Stock
              </p>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="flex w-fit flex-col justify-between justify-self-end">
          <p className="text-xs font-extrabold xs:text-xs md:text-sm xl:text-base">
            <span className="line-through decoration-double">N</span>
            {cartItem.price}
          </p>

          {/* quantity */}
          <div className="flex space-x-1">
            <button
              className="grid h-4 w-4 place-content-center bg-primary text-[14px] text-white md:h-5 md:w-5"
              onClick={() => handleCount("decrease")}
            >
              -
            </button>
            <p className="text-xs font-bold xs:text-xs lg:text-sm xl:text-base">
              {count}
            </p>
            <button
              className="grid h-4 w-4 place-content-center bg-primary text-[14px] text-white md:h-5 md:w-5"
              onClick={() => handleCount("increase")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

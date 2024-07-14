import { useContext, useEffect, useState } from "react";
import bin from "../../assets/icons/bin.svg";
import { CartItemValues, CartState } from "../../types/types";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartItem = ({ cartItem }: { cartItem: CartItemValues }) => {
  const { removeItemFromCart, updateItemQuantity } =
    useContext<CartState>(CartContext);

  const [count, setCount] = useState<number>(cartItem.quantity);

  const handleCount = (mode: "increase" | "decrease") => {
    if (count >= 1 && mode == "increase") {
      setCount((prevCount) => prevCount + 1);
    } else if (count > 1 && mode == "decrease") {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    updateItemQuantity(cartItem.id, count);
  }, [count, cartItem.id]);

  return (
    <div className="h-auto border border-gray border-t-yellow border-b-0 px-2 py-4 lg:px-4">
      <div className="flex justify-between gap-2 pt-1 lg:py-6">
        {/* column 1 */}
        <div className="flex gap-2 lg:gap-8">
          <div className="w-fit space-y-8 lg:space-y-10">
            <Link to={`/products/${cartItem.id}`}>
              <img
                src={" https://api.timbu.cloud/images/" + cartItem.image}
                alt="cartItem"
                className="aspect-square w-16 rounded-md border border-gray md:w-24 xl:w-32"
              />
            </Link>
            <div
              className="flex h-fit cursor-pointer space-x-1"
              onClick={() => removeItemFromCart(cartItem.id)}
            >
              <img src={bin} alt="" className="w-[14px] md:w-5" />
              <p className="self-end text-xs text-primary md:text-xs lg:text-sm">
                Remove
              </p>
            </div>
          </div>

          {/* column 2 */}
          <div className="justify-self-start">
            <div className="">
              <h3 className="text-sm font-bold md:text-sm lg:text-[18px]">
                {cartItem.name}
              </h3>
              <p className="text-xs font-bold xl:text-base">In Stock</p>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="flex w-fit flex-col justify-between justify-self-end">
          <p className="text-sm font-extrabold xl:text-base">
            <span className="line-through decoration-double">N</span>
            {cartItem.price?.toLocaleString()}
          </p>

          {/* quantity */}
          <div className="flex items-center space-x-1">
            <button
              className="grid h-6 w-6 place-content-center rounded bg-primary text-sm text-white lg:h-8 lg:w-8 lg:text-base"
              onClick={() => handleCount("decrease")}
            >
              -
            </button>
            <p className="text-sm font-bold lg:text-sm xl:text-base">{count}</p>
            <button
              className="grid h-6 w-6 place-content-center rounded bg-primary text-sm text-white lg:h-8 lg:w-8 lg:text-base"
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

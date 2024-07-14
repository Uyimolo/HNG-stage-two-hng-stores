import { useContext, useEffect, useState } from "react";
import stars from "../../assets/images/stars.png";
import { CartState, Product } from "../../types/types";
import Button from "../reusables/Button";
import CartContext from "../../context/CartContext";

const Details = ({ product }: { product: Product }) => {
  const { addItemToCart, cartItems } = useContext<CartState>(CartContext);

  const [isInCart, setIsInCart] = useState<boolean>(false);

  // console.log(product);
  const toBeAddedToCart = {
    name: product.name,
    id: product.id,
    price: product.current_price,
    // price: product.current_price && product.current_price[0].NGN[0],
    image: product?.photos[0].url,
    quantity: 1,
  };

  useEffect(() => {
    if (cartItems.some((item) => item.id === product.id)) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, product.id]);

  return (
    <div className="relative space-y-12">
      <div className="space-y-2">
        <div className="w-fit bg-orange px-2 py-1 text-white">
          <p>Official Store</p>
        </div>

        <h3 className="text-2xl font-bold lg:text-3xl">{product?.name}</h3>

        <div className="flex space-x-1">
          <img src={stars} alt="" className="w-20 lg:w-32" />
          <p className="text-[6px] xs:text-[8px] lg:text-xs xl:text-sm"></p>
        </div>

        <h4 className="text-xl lg:text-2xl">
          <span className="line-through decoration-double">N</span>
          {product.current_price && product.current_price.toLocaleString()}
        </h4>

        <p className="max-w-md pt-2 text-sm lg:text-base">
          {product?.description}
        </p>
      </div>

      <div className="text-primary space-y-2">
        <h4 className="text-base font-semibold lg:text-xl">Promotions</h4>
        <ul className="list-disc space-y-2 pl-4 text-sm lg:text-base">
          <li>Call 070HNGSTORE To Place Your Order.</li>
          <li>
            Need extra money? Loan up to{" "}
            <span className="line-through decoration-double">N</span>500,000 on
            the HNGPay Andaroid app.{" "}
          </li>
          <li>Enjoy cheaper delivery fees when you buy more.</li>
        </ul>
      </div>

      <div
        className="sticky bottom-6"
        onClick={() => addItemToCart(toBeAddedToCart)}
      >
        <Button
          variant="primary"
          className="h-12 min-w-full border-none bg-orange hover:bg-orange/80 lg:h-12 lg:min-w-full lg:text-sm"
        >
          {isInCart ? "ADDED TO CART" : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
};

export default Details;

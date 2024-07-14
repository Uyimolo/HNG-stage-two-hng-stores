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
    <div className="space-y-12">
      <div className="relative space-y-2">
        <h3 className="text-base font-bold lg:text-lg xl:text-xl">
          {product?.name}
        </h3>

        <div className="flex space-x-1">
          <img src={stars} alt="" />
          <p className="text-[6px] xs:text-[8px] lg:text-xs xl:text-sm"></p>
        </div>

        <h4 className="text-sm font-bold lg:text-base">
          <span className="line-through decoration-double">N</span>
          {product.current_price && product.current_price.toLocaleString()}
        </h4>

        <p className="max-w-md pt-2 text-sm lg:text-base">
          {product?.description}
        </p>
      </div>

      <div className="" onClick={() => addItemToCart(toBeAddedToCart)}>
        <Button
          variant="primary"
          className="min-w-full border-none bg-orange hover:bg-orange/80 lg:h-12 lg:min-w-full lg:text-sm"
        >
          {isInCart ? "ADDED TO CART" : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
};

export default Details;

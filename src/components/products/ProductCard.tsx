import stars from "../../assets/images/stars.png";
import Button from "../reusables/Button";
import { CartState, Product } from "../../types/types";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
const ProductCard = ({ product }: { product: Product }) => {
  const { addItemToCart, cartItems } = useContext<CartState>(CartContext);

  const [isInCart, setIsInCart] = useState<boolean>(false);

  const toBeAddedToCart = {
    name: product.name,
    id: product.id,
    price: product.current_price && product.current_price[0].NGN[0],
    image: product.photos[0].url,
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
    <div className="group overflow-hidden rounded-[5px] border-gray/60 bg-white shadow-md lg:rounded-[12px] lg:shadow-lg">
      {/* product image */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[5px] transition duration-300 group-hover:bg-gray lg:rounded-[12px]">
        {/* Product image */}
        <img
          src={"https://api.timbu.cloud/images/" + product.photos[0].url}
          alt={product.name}
          className="absolute left-1/2 top-1/2 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-200 group-hover:min-w-[120%]"
        />

        {/* overlay on hover baby */}
        <div className="absolute hidden aspect-square w-full place-content-center bg-black/30 group-hover:grid">
          <Link
            to={"/products/" + product.id}
            className="rounded border p-2 text-sm text-white"
          >
            View Product
          </Link>
        </div>
      </div>

      {/* product information */}
      <div className="space-y-2 px-[6px] py-1 shadow-md md:px-4 md:py-4">
        <div className="space-y-1 lg:space-y-2">
          <h4 className="text-[12px] font-bold text-neutral-500 xs:text-sm md:text-base xl:text-lg">
            {product.categories[0]?.name.toUpperCase()}
          </h4>

          <div className="space-y-[1px]">
            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-bold xl:text-base">
              {product.name}
            </p>

            <div className="flex items-center space-x-1">
              <img src={stars} alt="" className="w-16 md:w-20 xl:w-24" />

              <p className="text-xs font-bold xl:text-sm">(1.2k)</p>
            </div>
          </div>

          <h4 className="text-sm font-bold md:text-sm xl:text-base">
            <span className="line-through decoration-double">N</span>
            {product.current_price &&
              product.current_price[0].NGN[0].toLocaleString()}
          </h4>
        </div>
        <div
          className="h-7 md:h-7 lg:h-9 xl:h-10"
          onClick={() => addItemToCart(toBeAddedToCart)}
        >
          <Button
            variant="primary"
            className="hidden h-7 min-w-full group-hover:block md:h-7 lg:h-9 lg:min-w-full xl:h-10"
          >
            {isInCart ? "ADDED TO CART" : "ADD TO CART"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

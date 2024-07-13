import stars from "../../assets/images/stars.png";
import Button from "../reusables/Button";
import { CartState, Product } from "../../types/types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import eye from "../../assets/icons/eye-svgrepo-com.svg"
const ProductCard = ({ product }: { product: Product }) => {
  const { addItemToCart } = useContext<CartState>(CartContext);

  // console.log(product);

  const toBeAddedToCart = {
    name: product.name,
    id: product.id,
    price: 1,
    image: product.photos[0].url,
    quantity: 1,
  };

  return (
    <div className="group overflow-hidden rounded-[5px] border-gray/60 bg-white shadow-md hover:border lg:rounded-[12px] lg:shadow-lg">
      {/* product image */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-[5px] transition duration-300 group-hover:bg-gray lg:rounded-[12px]">
        {/* Product image */}
        <img
          src={"https://api.timbu.cloud/images/" + product.photos[0].url}
          alt=""
          className="absolute left-1/2 top-1/2 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-200 group-hover:min-w-[120%]"
        />
        {/* overlay on hover baby */}
        <div className="absolute hidden aspect-square w-full place-content-center bg-black/30 group-hover:grid">
          <Link
            to={"/products/" + product.id}
            className="rounded border p-2 text-xs text-white"
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
            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-bold xs:text-xs md:text-sm xl:text-base">
              {product.name}
            </p>
            <div className="flex items-center space-x-1">
              <img src={stars} alt="" className="w-16 md:w-20 xl:w-24" />
              <p className="text-[9px] font-bold xs:text-[8px] lg:text-[10px] xl:text-xs">
                (1.2k)
              </p>
            </div>
          </div>
          <h4 className="text-[12px] font-bold xs:text-xs md:text-sm xl:text-base">
            <span className="line-through decoration-double">N</span>
            {product.buying_price}
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
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

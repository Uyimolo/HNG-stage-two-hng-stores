import stars from "../../assets/images/stars.png";
import Button from "../reusables/Button";
import { CartState, Product } from "../../types/types";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
const ProductCard = ({ product }: { product: Product }) => {
  const { addItemToCart } = useContext<CartState>(CartContext);

  return (
    <div className="group overflow-hidden rounded-[5px] border border-gray bg-white shadow-md lg:rounded-[12px]">
      {/* product image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[5px] transition duration-300 group-hover:bg-gray lg:rounded-[12px]">
        <img
          src={product.image}
          alt=""
          className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      {/* product information */}
      <div className="space-y-2 px-[6px] py-1 shadow-md lg:px-3 lg:py-3">
        <div className="space-y-1 lg:space-y-2">
          <h4 className="text-[12px] font-bold text-neutral-500 xs:text-xs md:text-base xl:text-lg">
            {product.category}
          </h4>
          <div className="space-y-[1px]">
            <p className="text-[11px] font-bold xs:text-xs md:text-sm xl:text-base">
              {product.title}
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
            {product.price}
          </h4>
        </div>
        <div
          className="h-6 md:h-6 lg:h-8 xl:h-10"
          onClick={() => addItemToCart(product)}
        >
          <Button
            variant="primary"
            className="hidden h-6 min-w-full group-hover:block md:h-6 lg:h-8 lg:min-w-full xl:h-10"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

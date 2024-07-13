import stars from "../../assets/images/stars.png";
import { Product } from "../../types/types";
import Button from "../reusables/Button";

const Details = ({ product }: { product: Product }) => {

  if (product)
    return (
      <div className="space-y-12">
        <div className="relative space-y-2">
          <h3 className="text-xs font-bold xs:text-sm lg:text-base xl:text-xl">
            {product?.name}
          </h3>
          <div className="flex space-x-1">
            <img src={stars} alt="" />
            <p className="text-[6px] xs:text-[8px] lg:text-xs xl:text-sm"></p>
          </div>
          {/* <p>{product?.current_price?.NGN[0]}</p> */}
          <p className="max-w-md pt-2 text-[10px] xs:text-xs lg:text-sm xl:text-base">
            {product?.description}
          </p>
        </div>

        <div className="">
          <Button
            variant="primary"
            className="min-w-full border-none bg-orange hover:bg-orange/80 lg:h-12 lg:min-w-full lg:text-sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
};

export default Details;

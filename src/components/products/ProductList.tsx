import { productList } from "../../utilities/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 md:grid-cols-3 md:gap-x-[2%] lg:grid-cols-4 lg:gap-y-12 2xl:grid-cols-5">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

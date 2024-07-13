// import { productList } from "../../utilities/products";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/types";
import Pagination from "./Pagination";
import useReactQuery from "../../utilities/useReactQuery";
import Loading from "../Loading";

const ProductList = () => {
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);

  const url = `/api/products?organization_id=10f52461c0fc47c9be418323f2d56d5d&reverse_sort=false&page=${page}&size=10&Appid=NEFU0GPE7LT7HEA&Apikey=6557b99978244dbaaabdb1bfea62153520240712212554076418`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        setNumberOfPages(data.total / 10);

        setLoading(false);
        return data.items;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { data: products, isLoading } = useReactQuery(
    ["products", page],
    fetchData,
  );

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 md:grid-cols-3 md:gap-x-[2%] lg:grid-cols-4 lg:gap-y-12 2xl:grid-cols-5">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {!loading && numberOfPages > 1 && (
        <Pagination
          numberOfPages={numberOfPages}
          setPage={setPage}
          currentPageNumber={page}
        />
      )}
    </div>
  );
};

export default ProductList;

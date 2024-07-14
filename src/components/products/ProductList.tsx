import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product, SingleCategory } from "../../types/types";
import Pagination from "./Pagination";
import useReactQuery from "../../utilities/useReactQuery";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import caret from "../../assets/icons/caret.svg";
import { cn } from "../../utilities/cn";
import { motion } from "framer-motion";

const ProductList = () => {
  const [page, setPage] = useState<number>(1);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const [numberOfPages, setNumberOfPages] = useState<number>(1);

  const apiKey = import.meta.env.VITE_API_KEY;
  const appId = import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;

  const url = `/api/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=10&Appid=${appId}&Apikey=${apiKey}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setNumberOfPages(data.total / 10);

        return data.items;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { data: products, isLoading } = useReactQuery(["products"], fetchData);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `/api/categories?organization_id=${orgId}&reverse_sort=false&size=10&Appid=${appId}&Apikey=${apiKey}&page=1`,
      );

      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { data: categoryList, isLoading: categoryLoading } = useReactQuery(
    ["category"],
    fetchCategories,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
        <div
          className="flex w-fit cursor-pointer gap-2 rounded-md bg-primary p-2"
          onClick={() => setShowCategories((prevState) => !prevState)}
        >
          <h1 className="text-xs text-white xs:text-sm lg:text-base">
            See Categories
          </h1>
          <img
            src={caret}
            alt=""
            className={cn(
              "w-4 cursor-pointer transition-all duration-200 lg:w-6",
              showCategories ? "rotate-180" : "rotate-0",
            )}
          />
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: showCategories ? "auto" : 0 }}
          className="flex flex-wrap gap-2 overflow-hidden"
        >
          {!categoryLoading &&
            categoryList.map((category: SingleCategory, index: number) => (
              <Link
                className="rounded-full border px-2 py-1 text-xs capitalize hover:bg-primary hover:text-white md:text-sm"
                key={index}
                to={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            ))}
        </motion.div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 md:grid-cols-3 md:gap-x-[2%] lg:grid-cols-4 lg:gap-y-12 2xl:grid-cols-5">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination
        numberOfPages={numberOfPages}
        setPage={setPage}
        currentPageNumber={page}
      />
    </div>
  );
};

export default ProductList;

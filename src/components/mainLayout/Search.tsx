import { useState } from "react";
import magnifyingGlassIcon from "../../assets/icons/Vector.svg";
import close from "../../assets/icons/close.svg";
import loader from "../../assets/icons/loading-16-svgrepo-com.svg";
import { cn } from "../../utilities/cn";
import useReactQuery from "../../utilities/useReactQuery";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";
const Search = ({ className }: { className: string }) => {
  const [searchValue, setSearchValue] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const appId = import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;

  const url = `/api/products?organization_id=${orgId}&reverse_sort=false&Appid=${appId}&Apikey=${apiKey}&search_value=${searchValue}`;

  const fetchData = async () => {
    if (searchValue) {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data.items;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const { data: products, isLoading } = useReactQuery(
    ["search", searchValue],
    fetchData,
  );

  return (
    <div className={cn("relative h-fit w-full", className)}>
      <input
        type="text"
        placeholder="What are you looking for"
        className="flex h-[36px] w-full items-center rounded-[10px] bg-lightGray pl-10 text-sm placeholder:text-sm lg:text-base"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
      />

      <img
        src={magnifyingGlassIcon}
        alt=""
        className="absolute left-4 top-1/2 w-[13px] -translate-y-1/2"
      />
      <div className="absolute right-4 top-[25%]">
        {isLoading ? (
          <img
            src={loader}
            alt=""
            className={cn(
              "hidden aspect-square w-4",
              isLoading ? "loading-spinner block" : "",
            )}
          />
        ) : !isLoading && products ? (
          <img
            src={close}
            alt=""
            className="top-3 w-4 cursor-pointer"
            onClick={() => setSearchValue("")}
          />
        ) : (
          <div></div>
        )}
      </div>

      {/* search items */}
      {products?.length !== 0 && (
        <div
          className={cn(
            "custom-scrollbar absolute left-0 top-12 max-h-[70vh] w-full bg-white",
            products ? "rounded border border-gray pb-0 shadow-md overflow-y-scroll" : "",
          )}
        >
          {products?.map((product: Product | null, index: number) => (
            <div
              key={index}
              className="relative cursor-pointer border-t border-gray px-4 py-2 first:border-t-0 hover:bg-gray"
            >
              <Link
                to={`/products/${product?.id}`}
                className="flex items-center justify-between text-sm"
              >
                <p>{product?.name}</p>
                {/* <p>
                  <span className="line-through decoration-double">N</span>
                  {product?.current_price && product.current_price[0].NGN[0]}
                </p> */}
              </Link>
              {/* <img
              src={"https://api.timbu.cloud/images/" + product.photos[0].url}
              alt={product.name}
              className="w-6"
            /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

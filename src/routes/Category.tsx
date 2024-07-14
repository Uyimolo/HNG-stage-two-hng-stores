import { useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { Product } from "../types/types";
import Container from "../layout/Container";
import { useParams } from "react-router-dom";
import useReactQuery from "../utilities/useReactQuery";
import Loading from "../components/Loading";

const Category = () => {
  const { categoryId } = useParams<string>();

  const [categoryName, setCategoryName] = useState<string>("Category");
  
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const appId = import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;

  const url = `/api/products?organization_id=${orgId}&reverse_sort=false&size=10&Appid=${appId}&Apikey=${apiKey}&category_id=${categoryId}`;

  const fetchData = async () => {
    setLoading(true);
    try {
      if (categoryId) {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCategoryName(data.items[0].categories[0].name);
          return data.items;
        } else {
          console.error("API error:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const { data: products, isLoading } = useReactQuery(
    ["products", url],
    fetchData,
  );

  return (
    <main>
      <Container className="">
        {!isLoading && (
          <h1 className="bold text-lg lg:text-2xl">
            {categoryName.toUpperCase()}
          </h1>
        )}
        {loading ? (
          <Loading />
        ) : products ? (
          <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 md:grid-cols-3 md:gap-x-[2%] lg:grid-cols-4 lg:gap-y-12 2xl:grid-cols-5">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div>No products found</div>
        )}
      </Container>
    </main>
  );
};

export default Category;

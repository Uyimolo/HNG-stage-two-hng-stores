import LightBox from "../components/product-details/LightBox";

import Details from "../components/product-details/Details";

import Container from "../layout/Container";

import { useParams } from "react-router-dom";
import useReactQuery from "../utilities/useReactQuery";
import Loading from "../components/Loading";
// import NotFound from "./NotFound";
// import Button from "../components/reusables/Button";

const ProductDetails = () => {
  const { productId } = useParams();

  const apiKey = import.meta.env.VITE_API_KEY;
  const appId = import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/products/${productId}?organization_id=${orgId}&reverse_sort=false&size=10&Appid=${appId}&Apikey=${apiKey}`,
      );

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { data: product, isLoading } = useReactQuery(
    ["details", productId],
    fetchData,
  );

  // if (!product) {
  //   return (
  //     <div className="grid min-h-[500px] place-content-center">
  //       <p className="text-xs font-bold xs:text-sm md:text-base">
  //         Product not Found
  //       </p>
  //       <Link to="/" className="mx-auto w-fit">
  //         <Button variant="primary" className="">
  //           Back to Home
  //         </Button>
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <main className="relative">
      <div className="">
        <Container className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-[1600px] mx-auto">
          <LightBox images={product?.photos} />
          {isLoading ? <Loading /> : <Details product={product} />}
        </Container>
      </div>
    </main>
  );
};

export default ProductDetails;

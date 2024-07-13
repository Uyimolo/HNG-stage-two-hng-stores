// import { useParams } from 'react-router-dom';
import LightBox from "../components/product-details/LightBox";
// import useReactQuery from '../utilities/useReactQuery';
// import { useEffect, useState } from 'react';
import Details from "../components/product-details/Details";
// import image from "../assets/images/appleairpod.png";
// import image2 from "../assets/images/applewatchpink.png";
// import image3 from "../assets/images/headphone.png";
import Container from "../layout/Container";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { useParams } from "react-router-dom";
import useReactQuery from "../utilities/useReactQuery";

const ProductDetails = () => {
  const { productId } = useParams();

  // const [product, setProduct] = useState<Product>()
  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/products/${productId}?organization_id=10f52461c0fc47c9be418323f2d56d5d&reverse_sort=false&page=1&size=10&Appid=NEFU0GPE7LT7HEA&Apikey=6557b99978244dbaaabdb1bfea62153520240712212554076418`,
      );

      return await response.json();
      // console.log(data);
      // setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { data: product, isLoading } = useReactQuery(
    ["details", productId],
    fetchData,
  );

  return (
    <main className="relative">
      <div className="">
        <Container className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <LightBox images={product?.photos} />
          {isLoading ? <div className=""></div> : <Details product={product} />}
        </Container>
      </div>
    </main>
  );
};

export default ProductDetails;

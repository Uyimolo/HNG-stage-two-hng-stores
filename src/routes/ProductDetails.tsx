import { useParams } from 'react-router-dom';
import LightBox from '../components/product-details/LightBox';
import useReactQuery from '../utilities/useReactQuery';
import { useEffect, useState } from 'react';
import Details from '../components/product-details/Details';

const ProductDetails = () => {
  const { productId } = useParams();

  const [images, setImages] = useState();
  const [product, setProduct] = useState();

  const url = `https://dummyjson.com/products/${productId}`;
  const fetchProduct = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading } = useReactQuery(['product', url], fetchProduct);

  useEffect(() => {
    if (data) {
      setImages(data.images);
      setProduct(data);
    }
  }, [data, isLoading, product]);
  return (
    <main className='grid px-4 py-28 space-y-6 lg:px-12 xl:px-16 relative lg:grid-cols-2 lg:space-y-0 lg:gap-12'>
      <LightBox images={images} />
      <Details product={product} />
    </main>
  );
};

export default ProductDetails;

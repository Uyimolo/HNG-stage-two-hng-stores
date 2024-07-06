import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className='grid grid-cols-2 gap-x-[6%] gap-y-2 md:grid-cols-3 md:gap-x-[4%] lg:grid-cols-3'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
        <ProductCard key={product} />
      ))}
    </div>
  );
};

export default ProductList;

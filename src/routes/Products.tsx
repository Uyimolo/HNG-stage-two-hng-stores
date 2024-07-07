import ProductList from '../components/products/ProductList';
import Headliner from '../components/products/Headliner';
import { useState } from 'react';
// import useReactQuery from '../utilities/useReactQuery';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('smartphones');

  return (
    <section className=' px-4 py-28 lg:px-12 xl:px-16'>
      <Headliner />

      <div className='pt-6'>
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </section>
  );
};

export default Products;

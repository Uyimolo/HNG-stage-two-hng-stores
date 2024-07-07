import ProductList from '../components/products/ProductList';
import Headliner from '../components/products/Headliner';

const Products = () => {
  return (
    <section className=' px-4 py-28 lg:px-12 xl:px-16'>
      <Headliner />

      <div className='pt-6'>
        <ProductList />
      </div>
    </section>
  );
};

export default Products;

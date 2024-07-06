import ProductList from '../components/products/ProductList';
import Headliner from '../components/products/Headliner';

const Products = () => {
  return (
    <section className=' px-4 pt-28 lg:px-12 xl:px-16'>
      <Headliner />
      <div className='pt-6 grid grid-cols-[20%,1fr] gap-4  lg:grid-cols-[30%,1fr]'>
        <div className='border border-black h-72 w-full'></div> <ProductList />
      </div>
    </section>
  );
};

export default Products;

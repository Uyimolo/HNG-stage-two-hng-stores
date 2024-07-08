import stars from '../../assets/images/stars.png';
import Button from '../reusables/Button';
import { Product } from '../../types/types';
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='bg-white rounded-[5px] overflow-hidden group  border border-gray shadow-md lg:rounded-[12px]'>
      {/* product image */}
      <div className='rounded-[5px= aspect-square overflow-hidden w-full  rounded-[5px] relative lg:rounded-[12px]'>
        <img
          src={product.image}
          alt=''
          className='top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute  w-full object-contain aspect-square'
        />

        
      </div>

      {/* product information */}
      <div className='py-1 px-[6px] space-y-1 shadow-md lg:py-3 lg:px-3'>
        <div className='lg:space-y-2'>
          <h4 className='text-[9.4px] font-bold xs:text-xs md:text-base  xl:text-2xl text-neutral-500'>
            {product.category}
          </h4>
          <div className='space-y-[1px]'>
            <p className='text-[9.4px] font-bold xs:text-xs md:text-base  xl:text-2xl'>
              {product.title}
            </p>
            <div className='flex items-center space-x-1'>
              <img src={stars} alt='' className='w-16  md:w-20 xl:w-24' />
              <p className='text-[7.2px] font-bold xs:text-[8px] lg:text-[10px] xl:text-xs'>
                (1.2k)
              </p>
            </div>
          </div>
          <h4 className='text-[9.4px] font-bold xs:text-xs md:text-base  xl:text-2xl'>
            <span>$</span>
            {product.price}
          </h4>
        </div>
        <div className='h-5 md:h-6 lg:h-10'>
          <Button
            variant='primary'
            className='text-[8px] min-w-full h-5 hidden group-hover:block md:h-6 lg:min-w-full lg:h-10'>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import test from '../../assets/images/test.png';
import stars from '../../assets/images/stars.png';
import Button from '../reusables/Button';
const ProductCard = () => {
  return (
    <div className='bg-white rounded-[5px] overflow-hidde group  border border-gray lg:rounded-[12px]'>
      {/* product image */}
      <div className='bg-gray rounded-[5px= aspect-square overflow-hidden w-full border border-gray rounded-[5px]  relative lg:rounded-[12px]'>
        <img
          src={test}
          alt=''
          className='top-1/2 -translate-y-[66%] left-1/2 -translate-x-1/2 absolute  w-[70%]'
        />
      </div>

      {/* product information */}
      <div className='py-1 px-[6px] space-y-1 shadow-md lg:py-3 lg:px-3'>
        <div className='lg:space-y-2'>
          <h4 className='text-[8px] font-semibold text-neutral-600 xs:text-[10px] lg:text-xs xl:text-base'>
            PHONES
          </h4>
          <div className='space-y-[1px]'>
            <p className='text-[7px] font-bold xs:text-[9px] lg:text-xs  xl:text-base'>
              Iphone 15 Pro Max (256GB)
            </p>
            <div className='flex items-center space-x-1'>
              <img src={stars} alt='' className='w-14  md:w-20 xl:w-24' />
              <p className='text-[6px] font-bold xs:text-[8px] lg:text-[10px] xl:text-xs'>
                (1.2k)
              </p>
            </div>
          </div>
          <h4 className='text-[7px] mt-1 font-bold text-gray-600 xs:text-[10px] lg:text-xs  xl:text-base'>
            <span>N</span>2,250,000
          </h4>
        </div>
        <div className='h-5 md:h-6 lg:h-8'>
          <Button
            variant='primary'
            className='text-[8px] min-w-full h-5 hidden group-hover:block md:h-6 lg:min-w-full lg:h-8'>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import watch from '../../assets/images/smartwatch.png';
import bin from '../../assets/icons/bin.svg';
import Button from '../reusables/Button';
import thumbnail1 from '../../assets/images/thumbnail-1.png';
const CartItem = () => {
  return (
    <div className='shadow-md border-gray border p-2 lg:px-4 h-auto'>
      <h2 className=''>
        Cart <span className='self-end text-[8px] font-bold'>(1)</span>
      </h2>
      <div className='flex justify-between gap-2 border-t-2 border-yellow pt-1 lg:py-12'>
        {/* column 1 */}
        <div className='flex gap-8'>
          <div className='space-y-8 w-fit md:space-y-12'>
            <img src={watch} alt='' className='w-16 md:w-24 xl:w-32' />
            <div className='flex space-x-1 h-fit'>
              <img src={bin} alt='' className='w-[11px] md:w-5' />
              <p className='text-[8px] text-primary self-end xs:text-[10px] md:text-xs xl:text-sm'>
                Remove
              </p>
            </div>
          </div>

          {/* column 2 */}
          <div className='space-y-2 justify-self-start md:space-y-4 xl:space-y-8'>
            <div className=''>
              <h3 className='text-[8px] font-bold xs:text-xs md:text-sm xl:text-[18px]'>
                Apple Watch SE 2022 40
              </h3>
              <p className='text-[6px] font-bold xs:text-[8px] md:text-xs xl:text-base'>
                In Stock
              </p>
            </div>
            <Button
              variant='primary'
              className='text-[6px] min-w-fit max-w-fit px-2 h-fit py-[3px] xs:text-[8px] md:text-xs xl:text-[18px] lg:max-w-fit md:px-5 md:py-2 '>
              Continue Order
            </Button>
            <div className='flex space-x-1'>
              <div className='bg-gray aspect-[2/1.6] w-8 relative rounded  md:w-14 xl:w-20'>
                <img
                  src={thumbnail1}
                  alt=''
                  className=' w-[50%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                />
              </div>
              <div className='bg-gray rounded aspect-[2/1.4] w-8 relative md:w-14 xl:w-20'>
                <img
                  src={thumbnail1}
                  alt=''
                  className='rotate-[60deg] w-[50%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                />
              </div>
              <div className='bg-gray rounded aspect-[2/1.4] w-8 relative md:w-14 xl:w-20'>
                <img
                  src={thumbnail1}
                  alt=''
                  className='rotate-[100deg] w-[50%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                />
              </div>
              <div className='bg-gray rounded aspect-[2/1.4] w-8 relative md:w-14 xl:w-20'>
                <img
                  src={thumbnail1}
                  alt=''
                  className='rotate-[150deg] w-[50%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                />
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className='flex flex-col justify-between justify-self-end w-fit'>
          <p className='text-[8.5px] xs:text-xs md:text-sm xl:text-base font-extrabold'>
            N346,000
          </p>

          {/* quantity */}
          <div className='flex space-x-1'>
            <button className=' bg-primary  w-3 h-3 text-white grid place-content-center text-[10px] md:w-5 md:h-5'>
              -
            </button>
            <p className='text-[8.5px] xs:text-xs lg:text-sm xl:text-base font-bold'>
              1
            </p>
            <button className=' bg-primary  w-3 h-3 text-white grid place-content-center text-[10px] md:w-5 md:h-5'>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

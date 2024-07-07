import { Link } from 'react-router-dom';
import { cn } from '../../utilities/cn';
import Button from '../reusables/Button';

const PaymentSummary = ({ variant }: { variant: 'checkout' | 'cart' }) => {
  return (
    <div
      className={cn(
        'bg-primary shadow-md text-white space-y-2 py-4 lg:w-[25%] lg:justify-self-end lg:pt-8 lg:space-y-4',
        variant === 'checkout' ? 'lg:w-full' : ''
      )}>
      <h3 className='text-xs xs:text-sm md:text-base xl:text-[text-18] text-center'>
        PAYMENT SUMMARY
      </h3>
      {/* SECOND SECTION */}
      <div className='space-y-2 text-xs xs:text-sm md:text-base xl:text-[text-18] pt-2 border-t-2 border-yellow px-4'>
        <div className='flex justify-between '>
          <p>Items(1)</p>
          <p>N346,000</p>
        </div>

        <div className='flex justify-between'>
          <p>Delivery fees</p>
          <p>600</p>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className='flex justify-between pt-2 border-t-2 border-yellow text-xs xs:text-sm md:text-base xl:text-[text-18] px-4'>
        <p>Total</p>
        <p>N346,600</p>
      </div>

      <Link to={variant === "cart" ? '/checkout' : ''} className={cn('px-4 block', variant === 'checkout' ? 'pt-20' : '')}>
        <Button variant='secondary' className='min-w-full mt-8 lg:min-w-full'>
          {variant === 'checkout' ? 'Order Now' : 'Continue to Checkout'}
        </Button>
      </Link>
    </div>
  );
};

export default PaymentSummary;

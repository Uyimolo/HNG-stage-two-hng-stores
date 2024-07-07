import { Product } from '../../types/types';
import stars from '../../assets/images/stars.png';
import Button from '../reusables/Button';

type DetailsProps = {
  product: Product | undefined;
};
const Details = ({ product }: DetailsProps) => {
  if (product)
    return (
      <div className='space-y-12'>
        <div className='space-y-2 relative'>
          <h3 className='text-xs font-bold xs:text-sm lg:text-base xl:text-xl'>
            {product?.title}
          </h3>
          <div className='flex space-x-1'>
            <img src={stars} alt='' />
            <p className='text-[6px] xs:text-[8px] lg:text-xs xl:text-sm'>
              ({product.stock})
            </p>
          </div>
          <p className='text-[10px] pt-2 max-w-md xs:text-xs lg:text-sm xl:text-base'>
            {product?.description} 
          </p>
        </div>
            <Button variant='primary' className='bg-orange min-w-full border-none lg:min-w-full lg:h-12 lg:text-sm hover:bg-orange/80'>
          Add to Cart
        </Button>
      </div>
    );
};

export default Details;

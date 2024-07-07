import smilingCustomer from '../../assets/images/positive-overjoyed.png';
import frame from '../../assets/images/Rectangle 12.png';
import triangleFrame from "../../assets/images/yellow-triangle.png"

const Header = () => {
  return (
    <div className='bg-primary relative overflow-hidden  lg:order-2'>
      <img
        src={frame}
        alt=''
        className='w-[50%] absolute right-0 h-full lg:hidden'
      />
      <img
        src={triangleFrame}
        alt=''
        className='w-full hidden absolute left-0 right-0 h-full lg:block'
      />
      <div className='grid grid-cols-[55%,1fr] justify-between lg:grid-cols-1'>
        {/* left items */}
        <div className='relative'>
          {/* text */}
          <h1 className='rotate-[-15deg] text-[19px] w-fit absolute top-1/2 -translate-y-1/2 pl-4 text-white text-center lg:rotate-[-29deg] xl:text-[37px] lg:text-[27px] lg:top-10 lg:-left-0 lg:translate-x-0 lg:translate-y-0'>
            Start Shopping <br /> now?
          </h1>
        </div>

        <div className='relative lg:static'>
          <img src={smilingCustomer} alt='' className=' min-w-[110%] lg:absolute lg:bottom-0 lg:min-w-[70%] lg:w-[90%] lg:-right-[5%]' />
        </div>
      </div>
    </div>
  );
};

export default Header;

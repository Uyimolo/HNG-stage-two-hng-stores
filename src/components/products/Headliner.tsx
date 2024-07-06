import baloon from '../../assets/images/white-pastel-pink-balloons 1.png';
import phone from '../../assets/images/elegant-smartphone.png';
import smilingCustomer from '../../assets/images/positive-overjoyed.png';
import frame from '../../assets/images/Rectangle 12.png';
const Headliner = () => {
  return (
    <div className='bg-primary relative overflow-hidden '>
      <img src={frame} alt='' className='w-[45%] absolute right-0 h-full' />
      <div className='grid grid-cols-[55%,1fr] justify-between'>
        {/* left items */}
        <div className='grid grid-cols-[1fr,60%] items-center'>
          <img src={baloon} alt='' className='' />

          {/* text */}
          <div className='text-white font-nunito space-y-3 -translate-x-'>
            <h2 className='text-[3vw] bg-orange w-fit px-1'>
              <span className='italic '>70%</span> DISCOUNT
            </h2>
            <div>
              <h1 className='text-[2.6vw]'>IPHONE 15 PRO MAX</h1>
              <h3 className='text-[2.4vw]'>N 3,500,000</h3>
              <h3 className='text-[2.4vw]'>N 2,500,00</h3>
            </div>
            <h2 className='text-[2.2vw] text-center w-fit px-1 bg-orange'>
              T&C Applies
            </h2>
          </div>
        </div>

        <div className='relative'>
          <img
            src={phone}
            alt=''
            className='w-[60%] absolute z-10 -left-[8%] -bottom-1'
          />
          <img
            src={smilingCustomer}
            alt=''
            className=' translate-x-[5%] min-w-[110%]'
          />
        </div>
      </div>
    </div>
  );
};

export default Headliner;

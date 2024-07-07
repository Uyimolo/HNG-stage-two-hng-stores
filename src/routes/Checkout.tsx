import PaymentSummary from "../components/cart/PaymentSummary";

const Checkout = () => {
  const checkoutDetails = [
    {
      title: 'CUSTOMER ADDRESS',
      value1: '4 Banana Street, Magodo Brooks, Lagos State.',
      value2: '09134225053',
    },
    {
      title: 'DELIVERY DETAILS',
      value1: 'Door Delivery',
      value2: 'Delivery between 15 July and 16 July.',
    },
    {
      title: 'PAYMENT OPTIONS',
      value1: 'Pay on delivery',
      value2: 'Pre payment',
      value3: 'At HNG Stores we accept all cards',
    },
  ];

  return (
    <div className='py-28 grid px-4 lg:px-12 xl:px-16 lg:grid-cols-[75%,1fr] gap-6 lg:gap-4 items-start'>
      <div className='space-y-2'>
        {checkoutDetails.map((deets) =>
          !deets.value3 ? (
            <div className=' border border-gray shadow-md ' key={deets.title}>
              <div className='flex justify-between px-2 py-3 lg:px-4'>
                <h3 className='text-xs xs:text-sm md:text-base xl:text-[text-18] font-bold '>
                  {deets.title}
                </h3>
                <p className='cursor-pointer text-primary text-[10px] xs:text-xs md:text-sm xl:text-base'>
                  Change
                </p>
              </div>
              <div className='text-[10px] xs:text-xs md:text-sm xl:text-base border-yellow border-t-2 px-2 lg:px-4 pt-4 pb-12'>
                <p>{deets.value1}</p>
                <p>{deets.value2}</p>
              </div>
            </div>
          ) : (
            <div className=' border border-gray shadow-md ' key={deets.title}>
              <div className='flex px-2 lg:px-4 py-3 justify-between items-center'>
                <h3 className='text-xs xs:text-sm md:text-base xl:text-[text-18] font-bold '>
                  {deets.title}
                </h3>
                <p className='cursor-pointer text-primary text-[10px] xs:text-xs md:text-sm xl:text-base'>
                  Change
                </p>
              </div>
              <div className='text-[10px] xs:text-xs md:text-sm xl:text-base border-yellow border-t-2 px-2 lg:px-4 pt-4 pb-12 space-y-2'>
                <div className='flex space-x-2 items-center'>
                  <div className='w-2 aspect-square border border-gray rounded-full bg-primary'></div>
                  <p>{deets.value1}</p>
                </div>
                <div className=''>
                  <div className='flex space-x-2 items-center'>
                    <div className='w-2 aspect-square border border-gray rounded-full bg-primary'></div>
                    <p className=''>{deets.value2}</p>
                  </div>

                  <p className='pl-4'>{deets.value3}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* <div className='grid'> */}
      <PaymentSummary variant='checkout' />
      {/* </div> */}
    </div>
  );
};

export default Checkout;

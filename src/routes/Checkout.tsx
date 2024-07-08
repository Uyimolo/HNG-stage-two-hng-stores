import PaymentSummary from "../components/cart/PaymentSummary";

const Checkout = () => {
  const checkoutDetails = [
    {
      title: "CUSTOMER ADDRESS",
      value1: "4 Banana Street, Magodo Brooks, Lagos State.",
      value2: "09134225053",
    },
    {
      title: "DELIVERY DETAILS",
      value1: "Door Delivery",
      value2: "Delivery between 15 July and 16 July.",
    },
    {
      title: "PAYMENT OPTIONS",
      value1: "Pay on delivery",
      value2: "Pre payment",
      value3: "At HNG Stores we accept all cards",
    },
  ];

  return (
    <div className="grid items-start gap-4 px-4 pb-20 pt-28 lg:grid-cols-[65%,1fr] lg:px-12 xl:grid-cols-[75%,1fr] xl:px-16">
      <div className="space-y-2">
        {checkoutDetails.map((deets) =>
          !deets.value3 ? (
            <div className="border border-gray shadow-md" key={deets.title}>
              <div className="flex justify-between px-2 py-3 lg:px-4">
                <h3 className="text-sm font-bold xs:text-sm md:text-base xl:text-[text-18]">
                  {deets.title}
                </h3>
                <p className="cursor-pointer text-[12px] text-primary xs:text-xs md:text-sm xl:text-base">
                  Change
                </p>
              </div>
              <div className="border-t-2 border-yellow px-2 pb-12 pt-4 text-[12px] xs:text-xs md:text-sm lg:px-4 xl:text-base">
                <p>{deets.value1}</p>
                <p>{deets.value2}</p>
              </div>
            </div>
          ) : (
            <div className="border border-gray shadow-md" key={deets.title}>
              <div className="flex items-center justify-between px-2 py-3 lg:px-4">
                <h3 className="text-sm font-bold xs:text-sm md:text-base xl:text-[text-18]">
                  {deets.title}
                </h3>
                <p className="cursor-pointer text-[10px] text-primary xs:text-xs md:text-sm xl:text-base">
                  Change
                </p>
              </div>
              <div className="space-y-2 border-t-2 border-yellow px-2 pb-12 pt-4 text-xs xs:text-xs md:text-sm lg:px-4 xl:text-base">
                <div className="flex items-center space-x-2">
                  <div className="aspect-square w-2 rounded-full border border-gray bg-primary"></div>
                  <p>{deets.value1}</p>
                </div>
                <div className="">
                  <div className="flex items-center space-x-2">
                    <div className="aspect-square w-2 rounded-full border border-gray bg-primary"></div>
                    <p className="">{deets.value2}</p>
                  </div>

                  <p className="pl-4">{deets.value3}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* <div className='grid'> */}
      <PaymentSummary variant="checkout" />
      {/* </div> */}
    </div>
  );
};

export default Checkout;

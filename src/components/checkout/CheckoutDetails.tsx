import { useEffect, useState } from "react";
import PaymentSummary from "../cart/PaymentSummary";
import PaymentForm from "./PaymentForm";
import { cn } from "../../utilities/cn";
import { motion } from "framer-motion";

type checkoutDetailsProps = {
  street: string;
  phoneNumber: string;
  setShowDetails: (details: boolean) => void;
};

const CheckoutDetails = ({
  street = "",
  phoneNumber = "",
  setShowDetails,
}: checkoutDetailsProps) => {
  const [paymentMethod, setPaymentMethod] = useState<
    "on delivery" | "pre payment"
  >("on delivery");
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);

  useEffect(() => {
    paymentMethod === "pre payment"
      ? setShowPaymentForm(true)
      : setShowPaymentForm(false);
  }, [paymentMethod]);
  const checkoutDetails = [
    {
      title: "CUSTOMER ADDRESS",
      value1: street,
      value2: phoneNumber,
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
                {deets.title === "CUSTOMER ADDRESS" && (
                  <p
                    className="cursor-pointer text-[10px] text-primary xs:text-xs md:text-sm xl:text-base"
                    onClick={() => setShowDetails(false)}
                  >
                    Change
                  </p>
                )}
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
              </div>
              <div className="space-y-2 border-t-2 border-yellow px-2 pt-4 text-xs xs:text-xs md:text-sm lg:px-4 xl:text-base">
                <div className="flex items-center space-x-2">
                  <div
                    className={cn(
                      "aspect-square w-2 cursor-pointer rounded-full border border-gray",
                      paymentMethod === "on delivery" ? "bg-primary" : "",
                    )}
                    onClick={() => setPaymentMethod("on delivery")}
                  ></div>
                  <p>{deets.value1}</p>
                </div>

                <div className="pb-2">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "aspect-square w-2 cursor-pointer rounded-full border border-gray",
                        paymentMethod === "on delivery" ? "" : "bg-primary",
                      )}
                      onClick={() => setPaymentMethod("pre payment")}
                    ></div>
                    <p className="">{deets.value2}</p>
                  </div>

                  <p className="pl-4">{deets.value3}</p>
                </div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={showPaymentForm ? { height: "auto", opacity: 1 } : ""}
                className="mb-12 overflow-hidden"
              >
                <PaymentForm setShowPaymentForm={setShowPaymentForm} />
              </motion.div>
            </div>
          ),
        )}
      </div>

      <div className='sticky top-20'>
      <PaymentSummary variant="checkout" />
      </div>
    </div>
  );
};

export default CheckoutDetails;

import { useEffect, useState } from "react";
import PaymentSummary from "../cart/PaymentSummary";
import PaymentForm from "./PaymentForm";
import { cn } from "../../utilities/cn";
import { motion } from "framer-motion";
import visa from "../../assets/images/visa.svg";
import masterCard from "../../assets/images/logos_mastercard.svg";
import paypal from "../../assets/images/paypal.svg";

type checkoutDetailsProps = {
  street: string;
  phoneNumber: string;
  setShowDetails: (details: boolean) => void;
  checkoutFormValid: boolean;
};

const cards = [paypal, masterCard, visa];

const CheckoutDetails = ({
  street = "",
  phoneNumber = "",
  setShowDetails,
  checkoutFormValid,
}: checkoutDetailsProps) => {
  const [checkoutEnabled, setCheckoutEnabled] = useState<boolean>(false);

  const [paymentMethod, setPaymentMethod] = useState<
    "on delivery" | "pre payment"
  >("on delivery");

  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);

  useEffect(() => {
    paymentMethod === "pre payment"
      ? setShowPaymentForm(true)
      : setShowPaymentForm(false);
  }, [paymentMethod]);

  useEffect(() => {
    paymentMethod === "pre payment"
      ? setCheckoutEnabled(false)
      : setCheckoutEnabled(true);
  }, [paymentMethod]);

 
  // get delivery date
  const getWeekFromToday = () => {
    const today = new Date();
    const oneWeekFromToday = today.setDate(today.getDate() + 7);
    const TenDaysFromToday = today.setDate(today.getDate() + 10);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric" as const,
    };

    const earliestDeliveryDate = new Intl.DateTimeFormat("en-US", options).format(
      oneWeekFromToday,
    );

    const latestDeliveryDate = new Intl.DateTimeFormat("en-US", options).format(
      TenDaysFromToday,
    );

    return [earliestDeliveryDate, latestDeliveryDate]

    // return new Intl.DateTimeFormat("en-US", options).format(oneWeekFromToday);
  };


  const checkoutDetails = [
    {
      title: "CUSTOMER ADDRESS",
      value1: street,
      value2: phoneNumber,
    },
    {
      title: "DELIVERY DETAILS",
      value1: "Door Delivery",
      value2: `Delivery between ${getWeekFromToday()[0]} and ${getWeekFromToday()[1]} (if you order within the hour) .`,
    },
    {
      title: "PAYMENT OPTIONS",
      value1: "Pay on delivery",
      value2: "Pre payment",
      value3: "At HNG Stores we accept all cards",
    },
  ];
  return (
    <div className="grid items-start gap-4 md:grid-cols-[65%,1fr] xl:grid-cols-[75%,1fr]">
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
                    className="cursor-pointer text-xs text-primary xs:text-sm md:text-sm lg:text-base lg:hover:underline"
                    onClick={() => setShowDetails(false)}
                  >
                    Set Personal Info
                  </p>
                )}
              </div>
              <div className="border-t-2 border-yellow px-2 pb-12 pt-4 text-sm lg:px-4 lg:text-base">
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
                  <div className="rounded-full border border-primary p-[2px]">
                    <div
                      className={cn(
                        "aspect-square w-3 cursor-pointer rounded-full border border-primary",
                        paymentMethod === "on delivery" ? "bg-primary" : "",
                      )}
                      onClick={() => setPaymentMethod("on delivery")}
                    ></div>
                  </div>
                  <p className="text-sm lg:text-base">{deets.value1}</p>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between">
                  <div className="pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full border border-primary p-[2px]">
                        <div
                          className={cn(
                            "aspect-square w-3 cursor-pointer rounded-full border border-primary",
                            paymentMethod === "on delivery" ? "" : "bg-primary",
                          )}
                          onClick={() => setPaymentMethod("pre payment")}
                        ></div>
                      </div>
                      <p className="text-sm lg:text-sm">{deets.value2}</p>
                    </div>

                    <p className="pl-4 text-sm lg:text-base">{deets.value3}</p>
                  </div>
                  <div className="flex w-fit space-x-2 self-end xs:self-start">
                    {cards.map((card, index) => (
                      <img
                        src={card}
                        alt=""
                        key={index}
                        className="w-6 lg:w-5"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={showPaymentForm ? { height: "auto", opacity: 1 } : ""}
                className="mb-12 overflow-hidden"
              >
                <PaymentForm
                  setShowPaymentForm={setShowPaymentForm}
                  setCheckoutEnabled={setCheckoutEnabled}
                />
              </motion.div>
            </div>
          ),
        )}
        <div className=""></div>
      </div>

      <div className="sticky top-36">
        <PaymentSummary
          variant="checkout"
          disabled={!checkoutEnabled || !checkoutFormValid}
        />
      </div>
    </div>
  );
};

export default CheckoutDetails;

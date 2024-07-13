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
};

const cards = [paypal, masterCard, visa];

const CheckoutDetails = ({
  street = "",
  phoneNumber = "",
  setShowDetails,
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
                    className="cursor-pointer text-xs text-primary xs:text-xs md:text-sm lg:hover:underline xl:text-base"
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
                      "aspect-square w-3 cursor-pointer rounded-full border border-gray",
                      paymentMethod === "on delivery" ? "bg-primary" : "",
                    )}
                    onClick={() => setPaymentMethod("on delivery")}
                  ></div>
                  <p>{deets.value1}</p>
                </div>

                <div className="flex items-start justify-between">
                  <div className="pb-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={cn(
                          "aspect-square w-3 cursor-pointer rounded-full border border-gray",
                          paymentMethod === "on delivery" ? "" : "bg-primary",
                        )}
                        onClick={() => setPaymentMethod("pre payment")}
                      ></div>
                      <p className="">{deets.value2}</p>
                    </div>

                    <p className="pl-4">{deets.value3}</p>
                  </div>
                  <div className="flex space-x-2">
                    {cards.map((card, index) => (
                      <img
                        src={card}
                        alt=""
                        key={index}
                        className="w-4 lg:w-5"
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
        <PaymentSummary variant="checkout" disabled={!checkoutEnabled} />
      </div>
    </div>
  );
};

export default CheckoutDetails;

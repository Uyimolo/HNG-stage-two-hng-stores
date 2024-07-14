import { Link } from "react-router-dom";
import { cn } from "../../utilities/cn";
import Button from "../reusables/Button";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

interface PaymentSummaryProps {
  variant: "checkout" | "cart";
  disabled?: boolean;
}

const PaymentSummary = ({ variant, disabled = true }: PaymentSummaryProps) => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0,
  );

  return (
    <div
      className={cn(
        "space-y-2 bg-primary py-4 text-white shadow-md lg:space-y-4 lg:justify-self-end lg:pt-8",
        variant === "checkout" ? "lg:w-full" : "",
        cartItems.length === 0 ? "hidden" : "",
      )}
    >
      <h3 className="text-center font-bold text-sm md:text-base lg:text-[text-18]">
        PAYMENT SUMMARY
      </h3>
      {/* SECOND SECTION */}
      <div className="space-y-2 border-t-2 border-yellow px-4 pt-2 text-sm lg:text-base">
        <div className="flex justify-between">
          <p className="">{`Items(${cartItems.length})`}</p>
          <p>
            <span className="line-through decoration-double">N</span>
            {totalPrice.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Delivery fees</p>
          <p>
            <span className="line-through decoration-double">N</span>600
          </p>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className="flex justify-between border-t-2 border-yellow px-4 pt-2 text-sm lg:text-base">
        <p>Total</p>
        <p>
          <span className="line-through decoration-double">N</span>
          {(totalPrice + 600).toLocaleString()}
        </p>
      </div>

      <div>
        {variant === "checkout" && disabled ? (
          <div
            className={cn("block px-4", variant === "checkout" ? "mt-24" : "")}
          >
            <Button
              variant="secondary"
              className="mt-8 min-w-full lg:min-w-full"
            >
              Please fill in payment and checkout forms
            </Button>
          </div>
        ) : (
          <Link
            to={variant === "cart" ? "/checkout" : "/success"}
            className={cn("block px-4", variant === "checkout" ? "mt-24" : "")}
          >
            <Button
              variant="secondary"
              className="mt-8 min-w-full lg:min-w-full"
            >
              {variant === "checkout" ? "Order Now" : "Continue to Checkout"}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaymentSummary;

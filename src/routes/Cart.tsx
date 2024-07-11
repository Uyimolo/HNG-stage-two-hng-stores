import { useContext } from "react";
import CartItem from "../components/cart/CartItem";
import Header from "../components/cart/Header";
import PaymentSummary from "../components/cart/PaymentSummary";
import CartContext from "../context/CartContext";
import { CartState } from "../types/types";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext<CartState>(CartContext);

  return (
    <div className="px-4 py-28 lg:px-12 xl:px-16 max-w-[1800px] mx-auto overflow-hidden">
      <div className="grid items-start space-y-4 lg:grid-cols-[1fr,30%] lg:gap-3 lg:space-y-0 xl:grid-cols-[1fr,25%]">
        {/* header */}
        <div className="space-y-4 lg:sticky lg:top-20 lg:order-2">
          <Header />
          <div className="hidden lg:block">
            <PaymentSummary variant="cart" />
          </div>
        </div>
        {/* cart */}
        <div>
          <h2 className="rounded-t-md border border-gray p-2 text-sm font-bold lg:p-4 lg:text-lg">
            Cart ({cartItems.length})
          </h2>
          {cartItems.length ? (
            <div className="min-h-2">
              {cartItems?.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          ) : (
            <div className="grid min-h-[200px] place-content-center gap-4">
              <p className="text-center text-xs font-bold xs:text-sm lg:text-base">
                You have no products in your cart
              </p>

              <Link to="/">
                <Button variant="primary" className="mx-auto lg:min-w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="right-12 top-80 mt-4 grid w-full lg:fixed lg:hidden">
        <PaymentSummary variant="cart" />
      </div>
    </div>
  );
};

export default Cart;

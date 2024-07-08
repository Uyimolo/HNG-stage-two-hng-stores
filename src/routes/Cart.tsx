import { useContext } from "react";
import CartItem from "../components/cart/CartItem";
import Header from "../components/cart/Header";
import PaymentSummary from "../components/cart/PaymentSummary";
import CartContext from "../context/CartContext";
import { CartState } from "../types/types";

const Cart = () => {
  const { cartItems } = useContext<CartState>(CartContext);

  return (
    <div className="px-4 py-20 lg:px-12 xl:px-16">
      <div className="grid items-start space-y-4 lg:grid-cols-[1fr,30%] lg:gap-3 lg:space-y-0 xl:grid-cols-[1fr,25%]">
        {/* header */}
        <div className="space-y-4 lg:sticky lg:top-20 lg:order-2">
          <Header />
          <div className="hidden lg:block">
            <PaymentSummary variant="cart" />
          </div>
        </div>
        {/* cart */}
        <div className="min-h-2">
          {cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>

      <div className="right-12 top-80 mt-4 grid w-full lg:fixed lg:hidden">
        <PaymentSummary variant="cart" />
      </div>
    </div>
  );
};

export default Cart;

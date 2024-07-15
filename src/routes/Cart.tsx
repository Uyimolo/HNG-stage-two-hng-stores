import { useContext } from "react";
import CartItem from "../components/cart/CartItem";
import Header from "../components/cart/Header";
import PaymentSummary from "../components/cart/PaymentSummary";
import CartContext from "../context/CartContext";
import { CartState } from "../types/types";
import Button from "../components/reusables/Button";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems } = useContext<CartState>(CartContext);

  return (
    <main>
      <Container className="max-w-[1600px] mx-auto ">
        <div className="grid items-start space-y-4 md:grid-cols-[1fr,30%] md:gap-3 md:space-y-0 xl:grid-cols-[1fr,20%]">
          {/* header */}
          <div className="md:sticky md:top-40 md:order-2 md:space-y-4">
            <Header />
            <div className="hidden md:block">
              <PaymentSummary variant="cart" />
            </div>
          </div>

          {/* cart */}
          <div>
            <h2 className="rounded-t-md border border-gray p-2 text-sm font-bold lg:p-4 lg:text-lg">
              Cart ({cartItems.length})
            </h2>
            {cartItems.length ? (
              <div className="min-h-2 border-b border-gray">
                <AnimatePresence>
                  {cartItems?.map((cartItem) => (
                    <motion.div
                      key={cartItem.id}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: "-100%" }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <CartItem cartItem={cartItem} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="grid min-h-[200px] place-content-center gap-4">
                <p className="text-center text-xs font-bold xs:text-sm lg:text-base">
                  You have no products in your cart
                </p>

                <Link to="/" className="mx-auto w-fit">
                  <Button variant="primary" className="mx-auto lg:min-w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="right-12 top-80 mt-4 grid w-full md:hidden lg:fixed">
          <PaymentSummary variant="cart" />
        </div>
      </Container>
    </main>
  );
};

export default Cart;

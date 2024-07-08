import CartItem from "../components/cart/CartItem";
import Header from "../components/cart/Header";
import PaymentSummary from "../components/cart/PaymentSummary";

const Cart = () => {
  return (
    <div className="px-4 py-20 lg:px-12 xl:px-16">
      {/* <h1 className='text-center mb-12 text-sm lg:text-lg font-bold'>My Cart</h1> */}

      <div className="grid items-stretch space-y-4 lg:grid-cols-[1fr,30%] lg:gap-3 lg:space-y-0 xl:grid-cols-[1fr,25%]">
        {/* header */}
        <Header />
        {/* cart */}
        <CartItem />
      </div>

      <div className="mt-4 grid lg:mt-6">
        <PaymentSummary variant="cart" />
      </div>
    </div>
  );
};

export default Cart;

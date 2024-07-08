import CartItem from '../components/cart/CartItem';
import Header from '../components/cart/Header';
import PaymentSummary from '../components/cart/PaymentSummary';

const Cart = () => {
  return (
    <div className='py-28 px-4 lg:px-12 xl:px-16'>
      <h1>My Cart</h1>

      <div className='space-y-8 grid lg:grid-cols-[1fr,25%] items-stretch lg:space-y-0 lg:gap-3'>
        {/* header */}
        <Header />
        {/* cart */}
        <CartItem />
      </div>

      <div className='grid mt-5 lg:mt-10'>
        <PaymentSummary variant='cart'/>
      </div>
    </div>
  );
};

export default Cart;

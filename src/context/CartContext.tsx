import { createContext } from "react";
import { CartState } from "../types/types";

const CartContext = createContext<CartState>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
});

export default CartContext;

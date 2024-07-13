// import React, { useContext } from "react";
// import { Product } from "../types/types";

// // Define the cart context
// const CartContext = React.createContext<{
//   cartItems: Product[];
//   addToCart: (newItem: Product) => void;
//   removeFromCart: (itemId: number) => void;
//   updateQuantity: (itemId: number, newQuantity: number) => void;
//   getCartTotal: () => { totalItems: number; totalPrice: number };
// }>({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
//   updateQuantity: () => {},
//   getCartTotal: () => ({ totalItems: 0, totalPrice: 0 }),
// });

// export const useCart = () => {
//   const cart = useContext(CartContext);

//   if (!cart) {
//     throw new Error("useCart must be used within a CartProvider");
//   }

//   return cart;
// };

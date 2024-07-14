import React, { useState } from "react";
import CartContext from "./CartContext";
import { CartItemValues, CartState } from "../types/types";

const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemValues[]>([]);

  const addItemToCart = (newItem: CartItemValues) => {
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      return;
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItemFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value: CartState = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    updateItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

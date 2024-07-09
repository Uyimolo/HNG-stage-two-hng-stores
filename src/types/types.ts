export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
};

export interface CartState {
  cartItems: Product[];
  addItemToCart: (newItem: Product) => void;
  removeItemFromCart: (itemId: number) => void;
  clearCart: () => void;
  updateItemQuantity: (itemId: number, newQuantity: number) => void;
}

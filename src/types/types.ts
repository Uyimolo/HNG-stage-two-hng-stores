// export type Product = {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
//   image: string;
//   rating: number;
//   quantity: number;
// };

// Interface for Photo
export interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  // ... other photo properties
}

// Interface for Category
export interface Category {
  organization_id: string;
  name: string;
  // ... other category properties
}

export interface Product {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string[] | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: unknown; 
  organization_id: string;
  product_image: string[]; 
  categories: Category[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: {
    [currency: string]: {
      [x: string]: unknown;
      price: number | null;
      discount?: unknown[];
      retail_price?: number | null;
    };
  };
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: unknown | null;
}

export interface CartState {
  cartItems: CartItemValues[];
  addItemToCart: (newItem: CartItemValues) => void;
  removeItemFromCart: (itemId: string) => void;
  clearCart: () => void;
  updateItemQuantity: (itemId: string, newQuantity: number) => void;
}

export type CartItemValues = {
  name: string;
  image: string;
  price: number | null;
  id: string;
  quantity: number;
};

export interface SingleCategory {
  id: string;
  name: string;
  organization_id: string;
  is_deleted: boolean;
  description: string;
  category_type: string;
  subcategories: unknown[]; // You can replace `any` with a more specific type if needed
  entity_items: unknown[]; // You can replace `any` with a more specific type if needed
  parents: unknown[]; // You can replace `any` with a more specific type if needed
  photos: unknown[]; // You can replace `any` with a more specific type if needed
  url_slug: string | null;
}

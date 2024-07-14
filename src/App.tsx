import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import "./index.css";
import Checkout from "./routes/Checkout";
import Success from "./routes/Success";
import NotFound from "./routes/NotFound";
import CartProvider from "./context/CartProvider";
import ProductDetails from "./routes/ProductDetails";
import Category from "./routes/Category";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorElement from "./components/error-element/ErrorElement";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorElement />,
      children: [
        { path: "/", element: <Products /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/success", element: <Success /> },
        { path: "/products/:productId", element: <ProductDetails /> },
        { path: "/category/:categoryId", element: <Category /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import "./index.css";
import Checkout from "./routes/Checkout";
import Success from "./routes/Success";
import NotFound from "./routes/NotFound";
import CartProvider from "./context/CartProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Products /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/success", element: <Success /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

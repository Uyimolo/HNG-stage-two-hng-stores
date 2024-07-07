import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Products from './routes/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cart from './routes/Cart';
import './index.css';
import Checkout from './routes/Checkout';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Products /> },
        { path: '/cart', element: <Cart /> },
        { path: '/checkout', element: <Checkout /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

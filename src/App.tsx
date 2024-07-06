import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import Products from './routes/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/products', element: <Products /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

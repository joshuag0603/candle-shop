import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CandleCartItem from './pages/Cart';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import Setting from './pages/Setting';
import 'semantic-ui-css/semantic.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <CandleCartItem />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/settings',
    element: <Setting />,
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
};
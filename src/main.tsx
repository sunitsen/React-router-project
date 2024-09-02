import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, }
from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './layout/Header';
import SignIn from './pages/SignIn'
import UserProfile from './components/Users/UserProfile'
import UserOrders from './components/Users/UserOrders'
import ProtectedRoute from './routes/ProtectedRoute'
import ProductsDetails from './components/ProductDetails'
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
    
  
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path : 'user/profile',
            element : <UserProfile/>
          },
          {
            path : 'user/orders',
            element : <UserOrders/>
          }
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

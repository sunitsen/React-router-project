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


import AdminProfile from './components/Admin/AdminProfile'
import AdminCategories from './components/Admin/AdminCategories'
import AdminProducts from './components/Admin/AdminProducts'
import AdminManageUsers from './components/Admin/AdminManageUsers'
import AdminOrders from './components/Admin/AdminOrders'
import AdminRoute from './routes/AdminRoute'




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
        path: '/signout',
        element: <SignIn />
      },
      {
        path: "/products",
        element: <Products />,
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
        path: "/order",
        element: <UserOrders />,
      },
      // userroute
      {
        path: "/dashboard/user",
        element: <ProtectedRoute />,
        children: [
          {
            path : 'profile',
            element : <UserProfile/>
          },
          {
            path : 'orders',
            element : <AdminOrders/>
          }
        ]
      },

      // adminroute
      {
        path: "/dashboard/admin",
        element: <AdminRoute />,
        children: [
          {
            path : 'profile',
            element : <AdminProfile/>
          },
          {
            path : 'products',
            element : <AdminProducts/>
          },
          {
            path : 'categories',
            element : <AdminCategories/>
          },
          {
            path : 'users',
            element : <AdminManageUsers/>
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

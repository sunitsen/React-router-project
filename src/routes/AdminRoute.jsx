import React from 'react'
import SignIn from '../pages/SignIn';
import { Outlet } from 'react-router-dom';
const AdminRoute = () => {
    const isSignIn = true ;
    const isAdmin = true;
    return isSignIn && isAdmin ? <Outlet/> : <SignIn/>
}

export default AdminRoute

import React from 'react'
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn'

const protectedRoute = () => {

    //   {/* //can check using api call
    //   //redux-store -> user login */}
      const isSignIn = true ;
      return isSignIn ? <Outlet/> : <SignIn/>

}

export default protectedRoute

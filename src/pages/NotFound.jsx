import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  const handelGoToHome = () => {
    navigate("/")
  }
  return (
    <>
      {error && <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={handelGoToHome}>Go to Home page</button>
      </div>}
    </>
  );
}

export default NotFound

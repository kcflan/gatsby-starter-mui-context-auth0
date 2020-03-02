// src/pages/auth0_callback

import React, { useEffect } from 'react';

import { useAuth } from 'react-use-auth';

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication();
    // handleAuthentication({ postLoginRoute: '/account' });
  }, []);

  return <React.Fragment />;
};

export default Auth0CallbackPage;

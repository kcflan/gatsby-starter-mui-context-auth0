/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';
import { navigate } from 'gatsby';

import { AuthProvider } from 'react-use-auth';
import { UserProvider } from '../../src/context/userContext';
const domain = process.env.AUTH0_DOMAIN;
const clientID = process.env.AUTH0_CLIENTID;

export const wrapRootElement = ({ element }) => {
  return (
    <TopLayout>
      <AuthProvider
        navigate={navigate}
        auth0_domain={domain}
        auth0_client_id={clientID}
      >
        <UserProvider>{element}</UserProvider>
      </AuthProvider>
    </TopLayout>
  );
};

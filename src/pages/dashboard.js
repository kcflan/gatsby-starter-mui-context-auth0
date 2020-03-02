import React from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'react-use-auth';

const IndexPage = () => {
  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  //   React.useEffect(() => {
  //     loadAuthenticatedApp();
  //   }, []);

  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <React.Suspense fallback={<>{/* spinner */}</>}>
        {isAuthenticated() && <h1>Hi {user.email}</h1> ? (
          //   <AuthenticatedApp />
          <p>Logged In</p>
        ) : (
          //   <UnauthenticatedApp />
          <p>NOT Logged In</p>
        )}
      </React.Suspense>

      {!isAuthenticated() && <h1>Hi people</h1>}
      {isAuthenticated() && <h1>Hi {user.email}</h1>}

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  );
};

export default IndexPage;

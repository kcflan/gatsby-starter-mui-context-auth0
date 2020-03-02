import React from 'react';
import { useAuth } from 'react-use-auth';
import { useAsync } from 'react-async';

const UserContext = React.createContext();

function UserProvider(props) {
  const { user } = useAuth();
  console.log('user userContext: ', user);

  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);

  const {
    data = { role: null },
    error,
    isLoading,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: loadUserRole,
    userEmail: 'email@doesnot.exist',
  });

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return (
        <React.Fragment>
          <h2>pending...</h2>
        </React.Fragment>
      );
      //   return <FullPageSpinner />;
    }
    if (isRejected) {
      return (
        <div style={{ color: 'red' }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }
  const { role } = data;

  const roleUser = { ...user, role: role }; // { ...user, role: 'visitor' };

  return <UserContext.Provider value={roleUser} {...props} />;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };

const loadUserRole = async ({ userEmail }) => {
  return { role: 'visitor' };
};

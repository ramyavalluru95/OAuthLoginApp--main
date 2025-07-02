import { useAuth0 } from '@auth0/auth0-react';

const HomeDashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div style={{ padding: 20 }}>
      <h1> Welcome to UB Media </h1>
      {isAuthenticated ? (
        <p>You're logged in as <strong>{user.name}</strong></p>
      ) : (
        <p>Please login to access personalized company resources.</p>
      )}
    </div>
  );
};

export default HomeDashboard;
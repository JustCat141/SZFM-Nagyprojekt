// dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  // Use useSelector to access the user state from Redux store
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          {/* Render other user information */}
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}

export default Dashboard;

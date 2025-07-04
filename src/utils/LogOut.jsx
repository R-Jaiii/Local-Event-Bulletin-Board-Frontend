import React, { useState, useEffect } from 'react';

export default function LogOut() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setSessionToken(token);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setSessionToken(undefined);
    window.location.reload();
  };
  
  return (
    <div>
      {sessionToken ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useIsLoggedIn, useDynamicContext, useSocialAccounts } from '@dynamic-labs/sdk-react-core';
import { ProviderEnum } from '@dynamic-labs/types';

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const isLoggedIn = useIsLoggedIn();
  const { user, setShowAuthFlow,handleLogOut } = useDynamicContext();
  const { isLinked } = useSocialAccounts();

  console.log('User:', user, 'isLOggedIn:', isLoggedIn);  
  const handleLoginClick = () => {
    console.log('Login clicked');
    setShowAuthFlow(true);
  };

  const handleLogoutClick = () => {
    handleLogOut();
    localStorage.clear();
};

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`modal ${isDarkMode ? 'dark' : ''}`}>
      {isLoggedIn ? (
         <>      
         <p>{user?.verifiedCredentials?.[1]?.oauthDisplayName || 'No OAuth Display Name'}</p>
          <p>{user?.verifiedCredentials?.[1]?.email || 'No Email'}</p>
       <button onClick={handleLogoutClick}>Logout</button>
       </>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
   

    </div>
  );
}
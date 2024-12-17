'use client';

import { DynamicWidget } from "@/lib/dynamic";
import { useState, useEffect } from 'react';
import { useIsLoggedIn, useDynamicContext, useSocialAccounts } from '@dynamic-labs/sdk-react-core';
import { ProviderEnum } from '@dynamic-labs/types';

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const isLoggedIn = useIsLoggedIn();
  const { user, setShowAuthFlow } = useDynamicContext();
  const { isLinked } = useSocialAccounts();

  const handleLoginClick = () => {
    console.log('Login clicked');
    setShowAuthFlow(true);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`modal ${isDarkMode ? 'dark' : ''}`}>
      {!isLoggedIn ? (
        <button onClick={handleLoginClick}>Login</button>
      ) : (
        <p>{user?.verifiedCredentials?.[1]?.oauthDisplayName || 'No OAuth Display Name'}</p>
      )}
    </div>
  );
}
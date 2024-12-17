'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: "1cccdcf8-788c-461e-8d26-f2865d520018",
           walletConnectors: [],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
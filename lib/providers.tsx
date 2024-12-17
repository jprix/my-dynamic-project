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
        environmentId: "",
           walletConnectors: [],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
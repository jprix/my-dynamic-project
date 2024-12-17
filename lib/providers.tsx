import React, { ReactNode } from "react";
import {
  DynamicContextProvider,
  DynamicContextProps,
} from "@dynamic-labs/sdk-react-core";

interface DynamicProvidersProps {
  children: ReactNode;
}

export const DynamicProviders = ({ children }: DynamicProvidersProps) => {
  const DYNAMIC_ENVIRONMENT_ID =
    process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ||
    "1cccdcf8-788c-461e-8d26-f2865d520018";

  const safeSettings: DynamicContextProps["settings"] = {
    environmentId: DYNAMIC_ENVIRONMENT_ID,
    siweStatement:
      "Welcome to Dynamic Explorer. This is a demo application to showcase the Dynamic SDK.",
   
  };

  return (
    <DynamicContextProvider settings={safeSettings}>
      {children}
    </DynamicContextProvider>
  );
};

export default DynamicProviders;

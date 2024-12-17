// pages/_app.tsx
import React from "react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }) {
  const safeSettings = {
    environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "1cccdcf8-788c-461e-8d26-f2865d520018",
    siweStatement: "Welcome to Dynamic Explorer!",
  };

  return (
    <DynamicContextProvider settings={safeSettings}>
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}

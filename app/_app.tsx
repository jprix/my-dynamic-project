import React, { useState, useEffect } from "react";
import { DynamicProviders } from '../lib/providers';

function MyApp({ Component, pageProps }) {

    return (
        <DynamicProviders>
            <Component {...pageProps} />
        </DynamicProviders>
    );
}

export default MyApp;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import App from 'App';
import GlobalStyles from 'GlobalStyles';

const targetDom = document.getElementById('root');
const root = ReactDOM.createRoot(targetDom);
root.render(
  <HelmetProvider>
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </HelmetProvider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/index.css';

import App from './app.jsx';
import ReactQueryProvider from './providers/react-query.jsx';
import { useGlobalStore } from './stores/global.js';

// https://www.zoho.com/creator/newhelp/app-settings/widgets/creator-api-for-widgets.html#getallrecords
ZOHO.CREATOR.init()
  .then(() => useGlobalStore.setState({ zohoInitialized: true }))
  .catch((err: any) => {
    console.log('error during ZOHO.CREATOR.init()', { err });
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/index.css';

import { Toaster } from 'sonner';

import App from './app.jsx';
import Gantt from './components/gantt/index.jsx';
import ReactQueryProvider from './providers/react-query.jsx';
import { useGlobalStore } from './stores/global.js';

// https://www.zoho.com/creator/newhelp/app-settings/widgets/creator-api-for-widgets.html#getallrecords
ZOHO.CREATOR.init()
  .then(() => {
    console.log('ZOHO.CREATOR SDK', ZOHO.CREATOR);
    useGlobalStore.setState({ zohoInitialized: true });
  })
  .catch((err: any) => {
    console.log('error during ZOHO.CREATOR.init()', { err });
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <Toaster richColors />
      <Gantt />
    </ReactQueryProvider>
  </React.StrictMode>,
);

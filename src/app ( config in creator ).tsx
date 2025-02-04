import { useQuery } from '@tanstack/react-query';
import { AlertTriangle, Building } from 'lucide-react';

import ConfigPage from './components/pages/config/page.jsx';
import PageForm from './components/pages/form/page.jsx';
import { EmptyCard } from './components/shared/empty-card.jsx';
import Layout from './components/shared/layout.jsx';
import Loading from './components/shared/loading.jsx';
import { useGlobalStore } from './stores/global.js';

// https://www.zoho.com/creator/newhelp/app-settings/widgets/creator-api-for-widgets.html#getallrecords

export default function App() {
  const { zohoInitialized, getConfig } = useGlobalStore();

  const paramsForm = {
    appName: 'rececao-ativa',
    reportName: 'database_widget_Report',
  };

  const queryConfig = useQuery({
    queryKey: ['config'],
    queryFn: async () => await getConfig(paramsForm),
    enabled: !!zohoInitialized,
  });

  return (
    <Layout>
      {queryConfig.isPending ? (
        <Loading msg="A carregar Widget" />
      ) : queryConfig.isError ? (
        <ConfigPage />
      ) : (
        <PageForm />
      )}
    </Layout>
  );
}

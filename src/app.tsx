import { useQuery } from '@tanstack/react-query';
import { AlertTriangleIcon } from 'lucide-react';

import { EmptyCard } from './components/shared/empty-card.jsx';
import Layout from './components/shared/layout.jsx';
import Loading from './components/shared/loading.jsx';
import PageFormBuilder from './pages/form-builder/page.jsx';
import PageForm from './pages/form/page.jsx';
import { useGlobalStore } from './stores/global.js';
import { CREATOR_FORM_CONFIG } from './utils/constants';
import { zohocrm } from './utils/zoho-crm.js';

export default function App() {
  const { getConfig, zohoInitialized } = useGlobalStore();

  const queryConfig = useQuery({
    queryKey: ['config'],
    queryFn: async () => {
      const config = await getConfig(CREATOR_FORM_CONFIG);
      return config;
    },
    enabled: !!zohoInitialized,
  });

  return (
    <Layout>
      {queryConfig.isPending ? (
        <Loading msg="A carregar formulário" />
      ) : queryConfig.isError ? (
        <EmptyCard
          title="Confirme as configurações no formulário 'Widget Config'"
          description="Não foi possível carregar o formulário"
          icon={AlertTriangleIcon}
        />
      ) : (
        <>
          <PageFormBuilder />
          {/* <PageForm /> */}
        </>
      )}
    </Layout>
  );
}

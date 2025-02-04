import { useQuery } from '@tanstack/react-query';
import { AlertTriangleIcon } from 'lucide-react';

import { EmptyCard } from './components/shared/empty-card.jsx';
import Layout from './components/shared/layout.jsx';
import Loading from './components/shared/loading.jsx';
import PageFormBuilder from './pages/config/_components/tab-form-builder.jsx';
import PageConfig from './pages/config/page.jsx';
import PageForm from './pages/form/page.jsx';
import { useGlobalStore } from './stores/global.js';
import { CREATOR_FORM_CONFIG } from './utils/constants';

export default function App() {
  const { config, getConfig, zohoInitialized } = useGlobalStore();

  const queryConfig = useQuery({
    queryKey: ['config'],
    queryFn: async () => await getConfig(CREATOR_FORM_CONFIG),
    enabled: !!zohoInitialized,
  });

  return (
    <Layout>
      {queryConfig.isPending ? (
        <Loading msg="A carregar formulário" />
      ) : queryConfig.isError ? (
        <EmptyCard
          title="Falha ao obter a configuração do formulário"
          description={String(queryConfig.error)}
          icon={AlertTriangleIcon}
        />
      ) : (
        <PageForm />
      )}
    </Layout>
  );
}

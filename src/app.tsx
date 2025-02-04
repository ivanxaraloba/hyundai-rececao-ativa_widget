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
          title="Confirme as configurações no formulário 'Widget Config'"
          description={
            <div className="flex flex-col gap-1 mt-2">
              <span>
                Criar/Clonar o formulário 'Widget Config' (workflows + campos)
              </span>
              <span>Nome de API da aplicação do creator: 'rececao-ativa'</span>
              <span>Nome de API do report: 'Widget_Config_Report'</span>
              <span>
                ( Optional ) Para adicionar um campo mapeado por URL Params,
                adicione o ID do campo na "Page Variables" da página do widget
              </span>
            </div>
          }
          icon={AlertTriangleIcon}
        />
      ) : (
        <PageForm />
      )}
    </Layout>
  );
}

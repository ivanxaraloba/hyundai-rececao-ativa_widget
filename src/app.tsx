import { useQuery } from '@tanstack/react-query';
import { AlertTriangle, Building } from 'lucide-react';

import { EmptyCard } from './components/empty-card.jsx';
import Layout from './components/layout.jsx';
import Loading from './components/loading.jsx';
import PageForm from './components/page-form/_index.jsx';
import { useGlobalStore } from './stores/global.js';

// https://www.zoho.com/creator/newhelp/app-settings/widgets/creator-api-for-widgets.html#getallrecords

export default function App() {
  const { zohoInitialized } = useGlobalStore();

  const queryConfig = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const { data: records } = await ZOHO.CREATOR.API.getAllRecords({
          appName: 'rececao-ativa',
          reportName: 'database_widget_Report',
          criteria: '',
          page: 1,
          pageSize: 1,
        });

        if (!records?.length) throw 'Nenhum registo encontrado ou erro na API';

        const { data } = await ZOHO.CREATOR.API.getRecordById({
          appName: 'rececao-ativa',
          reportName: 'database_widget_Report',
          id: records[0].ID,
        });

        useGlobalStore.setState({ config: JSON.parse(data.config) });
      } catch (error) {
        console.log('error fetch', { error });
      }
    },
    enabled: !!zohoInitialized,
  });

  return (
    <Layout>
      {queryConfig.isPending ? (
        <Loading msg="A carregar Widget" />
      ) : (
        <PageForm />
      )}
    </Layout>
  );
}

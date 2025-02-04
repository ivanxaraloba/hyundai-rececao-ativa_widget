import { useQuery } from '@tanstack/react-query';

import PageFormBuilder from './components/pages/config/_components/tab-form-builder.jsx';
import PageConfig from './components/pages/config/page.jsx';
import PageForm from './components/pages/form/page.jsx';
import Layout from './components/shared/layout.jsx';
import { useGlobalStore } from './stores/global.js';
import { CREATOR_FORM_CONFIG } from './utils/constants.js';

export default function App() {
  const { config, getConfig, zohoInitialized } = useGlobalStore();

  const queryConfig = useQuery({
    queryKey: ['config'],
    queryFn: async () => await getConfig(CREATOR_FORM_CONFIG),
    enabled: !!zohoInitialized,
  });

  return (
    <Layout>
      <div className="space-y-10">
        {/* <PageFormBuilder /> */}
        {config && <PageForm />}
      </div>
    </Layout>
  );
}

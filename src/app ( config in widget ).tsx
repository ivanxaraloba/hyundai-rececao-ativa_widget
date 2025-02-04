import { useQuery } from '@tanstack/react-query';
import { AlertTriangle, Building } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TabFields from './components/pages/config/_components/tab-form-builder.jsx';
import PageConfig from './components/pages/config/page.jsx';
import PageForm from './components/pages/form/page.jsx';
import { EmptyCard } from './components/shared/empty-card.jsx';
import Layout from './components/shared/layout.jsx';
import Loading from './components/shared/loading.jsx';
import { useGlobalStore } from './stores/global.js';

// https://www.zoho.com/creator/newhelp/app-settings/widgets/creator-api-for-widgets.html#getallrecords

export default function App() {
  const { config } = useGlobalStore();

  return (
    <Layout>
      <div className="space-y-10">
        {!config ? (
          <PageConfig />
        ) : (
          <Tabs defaultValue="fields">
            <TabsList className="mb-4">
              <TabsTrigger value="fields">Fields</TabsTrigger>
              <TabsTrigger value="dots">Dots</TabsTrigger>
            </TabsList>
            <TabsContent value="fields">
              <TabFields />
            </TabsContent>
            <TabsContent value="dots"></TabsContent>
          </Tabs>
        )}
      </div>
    </Layout>
  );
}

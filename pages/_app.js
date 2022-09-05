import Layout from '@/components/layouts/index';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.scss';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);

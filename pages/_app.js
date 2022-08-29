import { RecoilRoot } from "recoil";
import Layout from "@/components/layouts/index";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.scss";
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

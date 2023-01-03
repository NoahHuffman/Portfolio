import Layout from "../pages/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  <meta
    name="viewport"
    content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />;
  return (
    <Layout>
      {/**this line renders the content of the pages*/}
      <Component {...pageProps} />
      {/**children of the Layout comp */}
    </Layout>
  );
}

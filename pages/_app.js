import Layout from "../pages/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/**this line renders the content of the pages*/}
      <Component {...pageProps} />
      {/**children of the Layout comp */}
    </Layout>
  );
}

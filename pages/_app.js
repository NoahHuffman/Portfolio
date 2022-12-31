import Layout from "../pages/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  <meta name="viewport" content="width=1280, initial-scale=1" />;
  var siteWidth = 1280;
  var scale = screen.width / siteWidth;

  document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
      "content",
      "width=" + siteWidth + ", initial-scale=" + scale + ""
    );
  return (
    <Layout>
      {/**this line renders the content of the pages*/}
      <Component {...pageProps} />
      {/**children of the Layout comp */}
    </Layout>
  );
}

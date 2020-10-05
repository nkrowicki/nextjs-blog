import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Desarrollador Web</p>
      </section>
      <footer>
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </footer>
    </Layout>
  );
}

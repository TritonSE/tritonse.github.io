import "../styles/common.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import styles from "./_app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

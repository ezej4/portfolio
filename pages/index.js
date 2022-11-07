import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ThemeProvider from "../contexts/theme/themeProdiver";
import { LanguajeProvider } from "../contexts/languaje";
import Main from "../components/main";

export default function App() {
  return (
      <LanguajeProvider>
        <ThemeProvider>
          <div className={styles.container}>
            <Head>
              <title>Ezequiel Fabbroni Page</title>
              <meta name="author" content="Ezequiel Fabbroni" />
              <meta charset="UTF-8" />
              <meta name="description" content="Know a little about me on my personal page" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
              <meta httpEquiv="content-language" content="en-us" />
            </Head>

            <main className={styles.main}>
              <Main />
            </main>
          </div>
        </ThemeProvider>
      </LanguajeProvider>
  );
}

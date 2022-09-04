import Head from "next/head";
import { Image } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>God Abeg</title>
        <meta name="description" content="Your daily dose of God Abeg intake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>God Abeg</h1>

        <Image alt="God abeg" src="/god-abeg-pills.jpeg" />
      </main>
    </div>
  );
}

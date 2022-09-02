import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>God Abeg</title>
        <meta name="description" content="Your daily dose of God Abeg intake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         God Abeg
        </h1>

<img alt="God abeg" src="/99C6650A-1062-4420-80FC-F173FCDA63EC.jpeg" />

</main>
       
    </div>
  )
}

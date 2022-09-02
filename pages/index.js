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

<img alt="God abeg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThunsj9vdIa3Y3CYdb55XbXFSsX6bD7cTyfQ&usqp=CAU" />
</main>
       
    </div>
  )
}

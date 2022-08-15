import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import BookSearch from '../components/HomePage/BookSearch'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>David's Website</title>
          <meta name="description" content="David's Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className={styles.Title}>Welcome To My Website</h1>
        <BookSearch></BookSearch>
      </div>
    </Layout>
  )
}

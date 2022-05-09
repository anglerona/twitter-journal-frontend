import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title> Twitter Journal</title>
        <meta name="keywords" content="twitter"/>
      </Head>
      <main className={styles.main}>{children}</main>
      
    </>
  )
}
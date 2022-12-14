import Head from 'next/head'
import Image from 'next/image'
import LayoutDefault from '../layouts/layout_default'
import styles from '../styles/Home.module.css'
import MyHome from './home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyHome />

      
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import WorkDesc from '../components/WorkDesc'
import Footer from '../components/Footer'

const Work = () => {
  return (
    <Layout pageTitle="N I X E N O S">
      <Header />
      <WorkDesc />
      <Footer />
    </Layout>
  )
}

export default Work;
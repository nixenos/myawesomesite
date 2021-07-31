import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Contact_page = () => {
  return (
    <Layout pageTitle="N I X E N O S">
      <Header />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Contact_page;
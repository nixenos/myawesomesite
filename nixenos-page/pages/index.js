import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Profile from '../components/Profile';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="N I X E N O S">
      <Header />
      <Profile />
      <Footer />
    </Layout>
  )
}

export default Index;
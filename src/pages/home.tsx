import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaDeRestaurantes from '../containers/ListaDeRestaurantes'

const Home = () => {
  return (
    <>
      <Header variant="true" />
      <ListaDeRestaurantes />
      <Footer />
    </>
  )
}

export default Home

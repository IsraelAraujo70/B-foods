import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaDeRestaurantes from '../containers/ListaDeRestaurantes'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchRestaurants } from '../store/reducers/restaurants'

const Home = () => {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state) => state.restaurants)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  return (
    <>
      <Header variant="true" />
      <ListaDeRestaurantes />
      <Footer />
    </>
  )
}

export default Home

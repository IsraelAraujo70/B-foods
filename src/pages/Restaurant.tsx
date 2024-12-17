import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchRestaurantById } from '../store/reducers/restaurants'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Cardapio from '../containers/Cardápio'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const {
    items: restaurants,
    loading,
    error
  } = useAppSelector((state) => state.restaurants)

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurantById(Number(id)))
    }
  }, [dispatch, id])

  const restaurante = restaurants.find((r) => r.id === Number(id))

  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  if (!restaurante) {
    return <p>Restaurante não encontrado</p>
  }

  return (
    <>
      <Header variant="false" />
      <Hero
        background={restaurante.image}
        category={restaurante.categoria}
        title={restaurante.nome}
      />
      <Cardapio id={restaurante.id} />
      <Footer />
    </>
  )
}

export default Restaurant

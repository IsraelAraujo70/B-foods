import React from 'react'
import CardapioItem from '../../components/CardapioItem'
import { Container } from '../../styles'
import { CardapioList } from './style'
import { useAppSelector } from '../../store/hooks'
import Loading from '../../components/ui/Loading'

type Props = {
  id: number
}

const Cardapio = ({ id }: Props) => {
  const {
    items: restaurants,
    loading,
    error
  } = useAppSelector((state) => state.restaurants)

  const restaurant = restaurants.find((r) => r.id === id)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  if (!restaurant) {
    return <p>Restaurante não encontrado</p>
  }

  return (
    <Container>
      <CardapioList>
        {restaurant.cardapio.map((item) => (
          <CardapioItem
            key={item.id}
            image={item.foto}
            name={item.nome}
            description={item.descricao}
            price={item.preco}
            portion={item.porcao}
            id={item.id}
          />
        ))}
      </CardapioList>
    </Container>
  )
}

export default Cardapio

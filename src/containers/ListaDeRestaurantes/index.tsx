import React from 'react'
import RestauranteCard from '../../components/RestauranteCard'
import { ListaDeRestaurantes as SListaDeRestaurantes } from './styles'
import { Container } from '../../styles'
import { useAppSelector } from '../../store/hooks'

const ListaDeRestaurantes = () => {
  const {
    items: restaurantes,
    loading,
    error
  } = useAppSelector((state) => state.restaurants)

  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  return (
    <Container>
      <SListaDeRestaurantes>
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            key={restaurante.id}
            categoria={restaurante.categoria}
            destaque={restaurante.destaque}
            image={restaurante.image}
            nome={restaurante.nome}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            id={restaurante.id}
          />
        ))}
      </SListaDeRestaurantes>
    </Container>
  )
}

export default ListaDeRestaurantes

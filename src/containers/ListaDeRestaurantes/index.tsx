import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import RestauranteCard from '../../components/RestauranteCard'
import {
  ListaDeRestaurantes as SListaDeRestaurantes,
  AnimatedCard
} from './styles'
import { Container } from '../../styles'
import Loading from '../../components/ui/Loading'

interface Restaurante {
  id: number
  categoria: string
  image: string
  nome: string
  avaliacao: number
  descricao: string
  destaque: boolean
}

const API_BASE_URL = 'https://b-foods.vercel.app/api'

const ListaDeRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}/restaurants`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantes(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  return (
    <Container>
      <SListaDeRestaurantes>
        {restaurantes.map((restaurante) => (
          <RestauranteObserver key={restaurante.id} restaurante={restaurante} />
        ))}
      </SListaDeRestaurantes>
    </Container>
  )
}

const RestauranteObserver = ({ restaurante }: { restaurante: Restaurante }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <AnimatedCard ref={ref} isVisible={inView}>
      <RestauranteCard
        categoria={restaurante.categoria}
        destaque={restaurante.destaque}
        image={restaurante.image}
        nome={restaurante.nome}
        avaliacao={restaurante.avaliacao}
        descricao={restaurante.descricao}
        id={restaurante.id}
      />
    </AnimatedCard>
  )
}

export default ListaDeRestaurantes

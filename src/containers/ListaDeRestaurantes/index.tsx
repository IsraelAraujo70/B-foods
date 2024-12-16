import RestauranteCard from '../../components/RestauranteCard'
import { ListaDeRestaurantes as SListaDeRestaurantes } from './styles'
import { Container } from '../../styles'
import { Restaurant } from '../../models/Restaurant'
type Props = { restaurantes: Restaurant[] }

const ListaDeRestaurantes = ({ restaurantes }: Props) => {
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

import CardapioItem from '../../components/CardapioItem'
import { Container } from '../../styles'
import { CardapioList } from './style'
import { Restaurantes } from '../../pages/Restaurant'
type Props = {
  id: number
}
const Cardapio = ({ id }: Props) => {
  return (
    <>
      <Container>
        <CardapioList>
          {Restaurantes[id - 1].cardapio.map((item) => (
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
    </>
  )
}

export default Cardapio

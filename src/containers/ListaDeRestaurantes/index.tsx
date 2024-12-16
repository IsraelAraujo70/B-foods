import RestauranteCard from '../../components/RestauranteCard'
import { ListaDeRestaurantes as SListaDeRestaurantes } from './styles'
import sushi from '../../assets/images/sushi.png'
import { Container } from '../../styles'
const ListaDeRestaurantes = () => {
  return (
    <Container>
      <SListaDeRestaurantes>
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <RestauranteCard
          categoria="Japonesa"
          destaque
          image={sushi}
          nome="Nome Do Restaurante"
          avaliacao={4.9}
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
      </SListaDeRestaurantes>
    </Container>
  )
}

export default ListaDeRestaurantes

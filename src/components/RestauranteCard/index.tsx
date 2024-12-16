import styled from 'styled-components'
import {
  AvaliacaoContainer,
  CategoriaDiv,
  DestaquesFlex,
  RestauranteCardContent,
  RestauranteCardTitle,
  RestauranteCardTitleContainer,
  SRestauranteCard
} from './styles'
import estrela from '../../assets/images/estrela.svg'
import Button from '../ui/Button'

type RestauranteCardProps = {
  image: string
  categoria: string
  destaque?: boolean
  nome: string
  avaliacao: number
  descricao: string
}

const RestauranteCard = ({
  image,
  categoria,
  destaque,
  nome,
  avaliacao,
  descricao
}: RestauranteCardProps) => {
  const RestauranteCardHero = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    height: 300px;
  `

  return (
    <>
      <SRestauranteCard>
        <RestauranteCardHero>
          <DestaquesFlex>
            {destaque && (
              <div>
                <p>Destaque</p>
              </div>
            )}
            <CategoriaDiv>
              <p>{categoria}</p>
            </CategoriaDiv>
          </DestaquesFlex>
        </RestauranteCardHero>
        <RestauranteCardContent>
          <RestauranteCardTitleContainer>
            <RestauranteCardTitle>{nome}</RestauranteCardTitle>
            <AvaliacaoContainer>
              <p>{avaliacao}</p>
              <img src={estrela} alt="" />
            </AvaliacaoContainer>
          </RestauranteCardTitleContainer>
          <p>{descricao}</p>
          <Button variant="secondary" text="Saiba Mais" />
        </RestauranteCardContent>
      </SRestauranteCard>
    </>
  )
}

export default RestauranteCard

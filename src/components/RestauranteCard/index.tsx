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
import { Link } from 'react-router-dom'

type RestauranteCardProps = {
  id: number
  image: string
  categoria: string
  destaque?: boolean
  nome: string
  avaliacao: number
  descricao: string
}

const RestauranteCard = ({
  id,
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
                <p>Destaque da semana</p>
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
          <Link to={`/restaurantes/${id}`}>
            <Button variant="secondary" text="Saiba Mais" />
          </Link>
        </RestauranteCardContent>
      </SRestauranteCard>
    </>
  )
}

export default RestauranteCard

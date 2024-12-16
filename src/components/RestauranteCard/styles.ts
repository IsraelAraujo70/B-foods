import styled from 'styled-components'
import { cores } from '../../styles'

export const SRestauranteCard = styled.li`
  list-style: none;
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  border: 1px solid ${cores.vermelho};
  height: 100%;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const DestaquesFlex = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  p {
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    padding: 4px 8px;
    font-size: 12px;
    font-weight: bold;
  }
  div {
    margin-top: 16px;
  }
`

export const CategoriaDiv = styled.div`
  height: 100%;
  padding-right: 8px;
`

export const RestauranteCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  height: 60%;
`

export const RestauranteCardTitleContainer = styled.h3`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RestauranteCardTitle = styled.h3`
  font-size: 24px;
`

export const AvaliacaoContainer = styled.div`
  display: flex;
  gap: 8px;
  img {
    width: 20px;
    height: 20px;
  }
`

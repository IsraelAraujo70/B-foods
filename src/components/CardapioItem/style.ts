import styled from 'styled-components'
import { cores } from '../../styles'

export const ItemBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
  width: 100%;
  max-height: 338px;
  height: 100%;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 8px;
  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    object-position: center;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`
export const ItemTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
`
export const ItemDescription = styled.p`
  font-size: 14px;
`
export const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`
export const ItemPortion = styled.p`
  font-size: 14px;
  color: ${cores.cinza};
`

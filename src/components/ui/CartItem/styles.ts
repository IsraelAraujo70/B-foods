import styled from 'styled-components'
import { cores } from '../../../styles'

export const CartItemContainer = styled.li`
  padding: 8px;
  display: flex;
  gap: 8px;
  background-color: ${cores.laranjaClaro};
  color: ${cores.vermelho};
  position: relative;
  margin-bottom: 16px;
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const TrashIconContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

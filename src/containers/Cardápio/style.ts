import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CardapioList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  margin: 3rem 0;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.amareloClaro};
  padding: 36px;
`
export const HeaderBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderBarContentV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
`
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`
export const NavP = styled.p`
  font-size: 24px;
  font-weight: bold;
  a {
    color: ${cores.vermelho};
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

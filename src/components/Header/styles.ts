import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.amareloClaro};
  padding: 36px;
`
export const HeaderBarContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & > *:nth-child(1) {
      order: 2;
    }
    & > *:nth-child(2) {
      order: 1;
    }
    & > *:nth-child(3) {
      order: 3;
    }
  }
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
export const NavP1 = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-right: 31.2%;
  a {
    color: ${cores.vermelho};
  }
  @media (max-width: ${breakpoints.desktop}) {
    margin: 16px 0;
  }
`

export const NavP2 = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-left: auto;
  a {
    color: ${cores.vermelho};
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    margin: 16px 0;
    a {
      flex-direction: column-reverse;
    }
  }
`

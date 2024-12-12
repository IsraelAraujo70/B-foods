import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  background-color: ${cores.amareloClaro};
  color: ${cores.vermelho};
  padding: 24px 0;
  text-align: center;
  p {
    font-size: 12px;
  }
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
`
export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

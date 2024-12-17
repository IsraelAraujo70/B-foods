import { styled, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const AnimatedCard = styled.li<{ isVisible: boolean }>`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-play-state: ${({ isVisible }) =>
    isVisible ? 'running' : 'paused'};
`

export const ListaDeRestaurantes = styled.ul`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  column-gap: 2rem;
`

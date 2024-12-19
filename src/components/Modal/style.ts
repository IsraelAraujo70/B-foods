import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ModalBackground = styled.div`
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
`
export const ModalContent = styled.div`
  z-index: 501;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding: 32px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    width: 90%;
    padding: 16px;
  }
`
export const ModalClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all 0.3s;
  :hover {
    transform: scale(1.1);
  }
`
export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const ModalTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
`
export const ModalDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
`
export const ModalImage = styled.div`
  max-width: 280px;
  max-height: 280px;
  width: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin: 16px 0;
  }
`

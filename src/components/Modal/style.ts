import styled from 'styled-components'
import { cores } from '../../styles'

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
  color: #fff;
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 32px;
`
export const ModalClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
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

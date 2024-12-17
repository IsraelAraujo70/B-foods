import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 499;
  display: none;
  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  z-index: 500;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  button {
    width: 100%;
  }
`
export const PrecoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

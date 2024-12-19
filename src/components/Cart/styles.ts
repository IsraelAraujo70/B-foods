import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
  ul {
    padding: 4px;
    max-height: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${cores.vermelho};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${cores.branco};
      border-radius: 4px;
    }
  }
  p {
    margin-top: 16px;
  }
  button {
    width: 100%;
    margin-bottom: 16px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
export const PrecoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
`

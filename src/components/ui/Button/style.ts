import styled from 'styled-components'
import { cores } from '../../../styles'

export const SaibaMaisBtn = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 84px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 8px 4px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`
export const AddButton = styled.button`
  background-color: ${cores.laranjaClaro};
  color: ${cores.vermelho};
  padding: 8px 4px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    border: 1px solid ${cores.vermelho};
  }
`

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { RootState } from '../../store'
import Button from '../ui/Button'
import { Overlay, CartContainer, Sidebar, PrecoContainer } from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootState) => state.carts)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(close())
  }
  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={handleClose} />
        <Sidebar>
          <ul>
            <li>
              <h3>Nome do item</h3>
            </li>
          </ul>
          <p>X itens no carrinho</p>
          <PrecoContainer>
            <b>Valor total</b>
            <b>R$ xxx</b>
          </PrecoContainer>
          <Button variant="primary" text="Continuar com a entrega" />
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart

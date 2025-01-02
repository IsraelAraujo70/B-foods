import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { RootState } from '../../store'
import Button from '../ui/Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  PrecoContainer,
  EmptyCart
} from './styles'
import CartItem from '../ui/CartItem'
import Form from '../Form'

const Cart = () => {
  const { isOpen } = useSelector((state: RootState) => state.carts)
  const { items } = useSelector((state: RootState) => state.carts)
  const [formOpen, setFormOpen] = useState(false)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(close())
  }
  const totalPrice = () => {
    return items
      .reduce((acc, item) => {
        return acc + item.preco
      }, 0)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }
  const handleFormOpen = () => {
    setFormOpen(true)
  }
  return (
    <>
      {!formOpen ? (
        items.length > 0 ? (
          <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={handleClose} />
            <Sidebar>
              <ul>
                {items.map((item) => {
                  return (
                    <CartItem
                      image={item.foto}
                      price={item.preco}
                      title={item.nome}
                      id={item.id}
                      key={item.id}
                    />
                  )
                })}
              </ul>
              <p>{items.length} itens no carrinho</p>
              <PrecoContainer>
                <b>Valor total</b>
                <b>{totalPrice()}</b>
              </PrecoContainer>
              <Button
                variant="primary"
                text="Continuar com a entrega"
                onClick={handleFormOpen}
              />
            </Sidebar>
          </CartContainer>
        ) : (
          <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={handleClose} />
            <Sidebar>
              <EmptyCart>Nenhum item no carrinho</EmptyCart>
            </Sidebar>
          </CartContainer>
        )
      ) : (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={handleClose} />
          <Sidebar>
            <Form />
          </Sidebar>
        </CartContainer>
      )}
    </>
  )
}

export default Cart

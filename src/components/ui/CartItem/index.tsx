import React from 'react'
import { CartItemContainer, TrashIconContainer } from './styles'
import { TrashIcon } from 'lucide-react'

type CartItemProps = {
  image: string
  title: string
  price: number
}

const CartItem = ({ image, price, title }: CartItemProps) => {
  const formatPrice = (value: number | undefined) => {
    if (typeof value !== 'number') return 'R$ 0,00'

    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  return (
    <CartItemContainer>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{formatPrice(price)}</p>
      </div>
      <TrashIconContainer>
        <TrashIcon size={16} />
      </TrashIconContainer>
    </CartItemContainer>
  )
}

export default CartItem

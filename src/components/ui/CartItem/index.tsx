import React from 'react'
import { TrashIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/reducers/cart'
import { CartItemContainer, TrashIconContainer } from './styles'

type CartItemProps = {
  image: string
  title: string
  price: number
  id: number
}

const CartItem = ({ image, price, title, id }: CartItemProps) => {
  const dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    console.log('Remove to cart clicked')
    dispatch(
      remove({
        id,
        foto: '',
        nome: '',
        descricao: '',
        preco: 0,
        porcao: ''
      })
    )
  }
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
      <TrashIconContainer onClick={handleRemoveFromCart}>
        <TrashIcon size={16} />
      </TrashIconContainer>
    </CartItemContainer>
  )
}

export default CartItem

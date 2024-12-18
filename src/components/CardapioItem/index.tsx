import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import Button from '../ui/Button'
import Modal from '../Modal'
import {
  ItemBackground,
  ItemDescription,
  ItemPrice,
  ItemPortion,
  ItemTitle,
  ImagemCardapio
} from './style'
import React from 'react'

type Props = {
  image: string
  name: string
  description: string
  price: number
  portion: string
  id: number
}

const CardapioItem = ({
  image,
  name,
  description,
  price,
  portion,
  id
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    console.log('Add to cart clicked')
    dispatch(
      add({
        id,
        foto: image,
        nome: name,
        descricao: description,
        preco: price,
        porcao: portion
      })
    )
  }

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <ItemBackground>
        <div>
          <ImagemCardapio onClick={handleModalOpen}>
            <img src={image} alt={name} />
          </ImagemCardapio>
        </div>
        <div>
          <ItemTitle>{name}</ItemTitle>
          <ItemPortion>{portion}</ItemPortion>
        </div>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </ItemPrice>
        <Button
          text="Adicionar ao Carrinho"
          variant="primary"
          onClick={handleAddToCart}
        />
      </ItemBackground>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          id={id}
          image={image}
          name={name}
          description={description}
          price={price}
          portion={portion}
        />
      )}
    </>
  )
}

export default CardapioItem

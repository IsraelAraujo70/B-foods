import { useState } from 'react'
import Button from '../ui/Button'
import Modal from '../Modal'
import {
  ItemBackground,
  ItemDescription,
  ItemPrice,
  ItemPortion,
  ItemTitle
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
          onClick={handleModalOpen}
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

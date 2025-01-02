import React from 'react'
import { XIcon } from 'lucide-react'
import {
  ModalBackground,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalText,
  ModalTitle
} from './style'
import Button from '../ui/Button'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
type ModalProps = {
  open: boolean
  onClose: () => void
  image: string
  name: string
  description: string
  price: number
  portion: string
  id: number
}

const Modal = ({
  open,
  onClose,
  image,
  name,
  description,
  price,
  portion,
  id
}: ModalProps) => {
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
  return (
    <>
      <ModalBackground
        style={{ display: open ? 'block' : 'none' }}
        onClick={onClose}
      />
      <ModalContent>
        <ModalClose onClick={onClose}>
          <XIcon size={24} color="#fff" />
        </ModalClose>
        <ModalImage>
          <img src={image} alt="" />
        </ModalImage>
        <ModalText>
          <ModalTitle>{name}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
          <p>{portion}</p>
          <div>
            <Button
              text={`Adicionar ao Carrinho - R$ ${price.toLocaleString(
                'pt-BR',
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              )}`}
              variant="primary"
              onClick={handleAddToCart}
            ></Button>
          </div>
        </ModalText>
      </ModalContent>
    </>
  )
}

export default Modal

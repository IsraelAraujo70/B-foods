import React from 'react'
import { XIcon } from 'lucide-react'
import {
  ModalBackground,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalText,
  ModalTitle
} from './style'
import Button from '../ui/Button'
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
  portion
}: ModalProps) => {
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
        <img src={image} alt="" />
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
            ></Button>
          </div>
        </ModalText>
      </ModalContent>
    </>
  )
}

export default Modal

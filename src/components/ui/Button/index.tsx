import React from 'react'
import { AddButton, SaibaMaisBtn } from './style'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({ variant, text, onClick, type }: ButtonProps) => {
  return variant === 'primary' ? (
    <AddButton onClick={onClick} type={type}>
      {text}
    </AddButton>
  ) : (
    <SaibaMaisBtn onClick={onClick} type={type}>
      {text}
    </SaibaMaisBtn>
  )
}

export default Button

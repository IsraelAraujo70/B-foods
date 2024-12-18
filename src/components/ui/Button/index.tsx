import React from 'react'
import { AddButton, SaibaMaisBtn } from './style'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
}

const Button = ({ variant, text, onClick }: ButtonProps) => {
  return variant === 'primary' ? (
    <AddButton onClick={onClick}>{text}</AddButton>
  ) : (
    <SaibaMaisBtn onClick={onClick}>{text}</SaibaMaisBtn>
  )
}

export default Button

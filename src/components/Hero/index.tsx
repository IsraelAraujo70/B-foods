import React from 'react'
import { styled } from 'styled-components'
import { Container } from '../../styles'
import { HeroCategory, HeroContent, HeroTitle } from './styles'

type HeroProps = {
  background: string
  title: string
  category: string
}

const Hero = ({ background, title, category }: HeroProps) => {
  const HeroImage = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    height: 40vh;
  `
  return (
    <>
      <HeroImage>
        <Container>
          <HeroContent>
            <HeroCategory>{category}</HeroCategory>
            <HeroTitle>{title}</HeroTitle>
          </HeroContent>
        </Container>
      </HeroImage>
    </>
  )
}

export default Hero

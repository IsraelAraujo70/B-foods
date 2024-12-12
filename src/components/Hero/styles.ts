import styled from 'styled-components'

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
`
export const HeroCategory = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
`

export const HeroContent = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 150px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 50px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`

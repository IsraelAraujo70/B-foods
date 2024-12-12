import { Container } from '../../styles'
import {
  HeaderBar,
  HeaderBarContent,
  HeaderBarContentV,
  NavP,
  Title
} from './styles'
import logo from '../../assets/images/Logo.svg'
import { ShoppingCartIcon } from 'lucide-react'

type Props = {
  variant?: 'true' | 'false'
}

const Header = ({ variant }: Props) => {
  return (
    <>
      {variant === 'true' ? (
        <HeaderBar>
          <Container>
            <HeaderBarContentV>
              <img src={logo} alt="B foods" />
              <Title>
                Viva experiências gastronômicas no conforto da sua casa
              </Title>
            </HeaderBarContentV>
          </Container>
        </HeaderBar>
      ) : (
        <HeaderBar>
          <Container>
            <HeaderBarContent>
              <NavP>
                <a href="">Restaurantes</a>
              </NavP>
              <img src={logo} alt="B foods" />
              <NavP>
                <a href="">
                  <p>0 protudos no carrinho</p>
                  <ShoppingCartIcon />
                </a>
              </NavP>
            </HeaderBarContent>
          </Container>
        </HeaderBar>
      )}
    </>
  )
}

export default Header

import { ShoppingCartIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles'
import {
  HeaderBar,
  HeaderBarContent,
  HeaderBarContentV,
  NavP1,
  NavP2,
  Title
} from './styles'
import logo from '../../assets/images/Logo.svg'

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
              <NavP1>
                <Link to="/">Restaurantes</Link>
              </NavP1>
              <img src={logo} alt="B foods" />
              <NavP2>
                <a href="">
                  <p>0 produto(s) no carrinho</p>
                  <ShoppingCartIcon />
                </a>
              </NavP2>
            </HeaderBarContent>
          </Container>
        </HeaderBar>
      )}
    </>
  )
}

export default Header

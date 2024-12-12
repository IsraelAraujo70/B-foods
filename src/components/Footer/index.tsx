import { Container } from '../../styles'
import { Redes, Footer as SFooter } from './styles'
import { FooterContent as SFooterContent } from './styles'
import logo from '../../assets/images/Logo.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'

const Footer = () => {
  return (
    <>
      <SFooter>
        <Container>
          <SFooterContent>
            <img src={logo} alt="B foods" />
            <Redes>
              <img src={instagram} alt="Instagram" />
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
            </Redes>
            <p>
              A bfood é uma plataforma para divulgação de estabelecimentos, a
              responsabilidade pela entrega, qualidade dos produtos é toda do
              estabelecimento contratado.{' '}
            </p>
          </SFooterContent>
        </Container>
      </SFooter>
    </>
  )
}

export default Footer

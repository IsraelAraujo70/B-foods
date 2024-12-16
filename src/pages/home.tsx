import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaDeRestaurantes from '../containers/ListaDeRestaurantes'
import { Restaurantes } from './Restaurant'

const Home = () => {
  return (
    <>
      <Header variant="true" />
      <ListaDeRestaurantes restaurantes={Restaurantes} />
      <Footer />
    </>
  )
}

export default Home

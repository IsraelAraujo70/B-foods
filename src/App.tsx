import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import ListaDeRestaurantes from './containers/ListaDeRestaurantes'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header variant="true" />
        <ListaDeRestaurantes />
        <Footer />
      </div>
    </>
  )
}

export default App

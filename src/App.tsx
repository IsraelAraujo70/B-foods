import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { GlobalStyle } from './styles'
import LaDolceVita from './assets/images/La-Dolce-Vita-Trattoria.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header variant="false" />
        <Footer />
      </div>
    </>
  )
}

export default App

import Header from './components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header variant="false" />
      </div>
    </>
  )
}

export default App

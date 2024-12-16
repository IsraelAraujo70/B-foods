import { GlobalStyle } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Restaurant from './pages/Restaurant'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes/:id',
    element: <Restaurant />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App

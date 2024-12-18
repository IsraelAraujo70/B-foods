import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyle } from './styles'
import Home from './pages/home'
import Restaurant from './pages/Restaurant'
import store from './store'

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

export const fetchRestaurants = () => {
  return fetch('https://b-foods.vercel.app/api/restaurants')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching restaurants:', error))
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={rotas} />
      </div>
    </Provider>
  )
}

export default App

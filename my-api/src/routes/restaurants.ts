import { Router } from 'express'
import { Restaurantes } from '../data/restaurants'

const router = Router()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001']

router.use((req, res, next) => {
  const origin = req.headers.origin
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

router.get('/restaurants', (req, res) => {
  res.json(Restaurantes)
})

router.get('/restaurants/:id', (req, res) => {
  const restaurant = Restaurantes.find((r) => r.id === parseInt(req.params.id))
  if (restaurant) {
    res.json(restaurant)
  } else {
    res.status(404).send('Restaurante não encontrado')
  }
})

export default router

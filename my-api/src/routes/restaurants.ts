import { Router } from 'express'
import { Restaurantes } from '../data/restaurants'

const router = Router()

const API_BASE_URL = 'https://b-foods.vercel.app/api/restaurants'

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
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

import { Router } from 'express'
import { Restaurantes } from '../data/restaurants'

const router = Router()

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

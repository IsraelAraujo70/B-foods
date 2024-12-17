import express from 'express'
import cors from 'cors'
import path from 'path'
import restaurantRoutes from './routes/restaurants'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const API_BASE_URL = 'https://b-foods.vercel.app/api/restaurants'

app.use(
  cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
  })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', restaurantRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(port, () => {
  const environment = process.env.VERCEL_ENV || 'production'
  const baseUrl =
    environment === 'development'
      ? 'http://localhost:3000'
      : 'https://b-foods.vercel.app'

  console.log(`API rodando em ${baseUrl} (${environment})`)
})

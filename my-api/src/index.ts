import express from 'express'
import cors from 'cors'
import path from 'path'
import restaurantRoutes from './routes/restaurants'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = ['https://b-foods.vercel.app']

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
  })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', restaurantRoutes)

app.listen(port, () => {
  const environment = process.env.VERCEL_ENV || 'production'
  const baseUrl = 'https://b-foods.vercel.app'

  console.log(`API rodando em ${baseUrl} (${environment})`)
})

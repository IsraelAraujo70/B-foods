import express from 'express'
import cors from 'cors'
import path from 'path'
import restaurantRoutes from './routes/restaurants'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
  })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', restaurantRoutes)

app.listen(port, () => {
  const environment = process.env.VERCEL_ENV || 'development'
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`

  console.log(`API rodando em ${baseUrl} (${environment})`)
})

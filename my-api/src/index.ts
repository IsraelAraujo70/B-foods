import express from 'express'
import cors from 'cors'
import path from 'path'
import restaurantRoutes from './routes/restaurants'

const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:3001',
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined
].filter((origin): origin is string => Boolean(origin))

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  })
)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', restaurantRoutes)

app.listen(port, () => {
  const environment = process.env.VERCEL_ENV || 'local'
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`

  console.log(`API rodando em ${baseUrl} (${environment})`)
})

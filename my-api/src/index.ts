import express from 'express'
import cors from 'cors'
import path from 'path'
import restaurantRoutes from './routes/restaurants'

const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = process.env.VERCEL_URL
  ? [
      `https://${process.env.VERCEL_URL}`,
      'http://localhost:3000',
      'http://localhost:5173'
    ]
  : ['http://localhost:3000', 'http://localhost:5173']

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
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

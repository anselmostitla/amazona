import express from 'express'
import 'dotenv/config'
import { sampleProducts } from './data'
import productRouter from './routes/product.route'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
   credentials: true,
   // origin: ['http://localhost:5174']
}))

app.use('/api/v1', productRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`server running on port ${PORT}...`);
})

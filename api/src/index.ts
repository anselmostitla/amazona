import express from 'express'
import 'dotenv/config'
import { sampleProducts } from './data'
import productRouter from './routes/product.route'

const app = express()
app.use(express.json())

app.use('/api/v1', productRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`server running on port ${PORT}...`);
})

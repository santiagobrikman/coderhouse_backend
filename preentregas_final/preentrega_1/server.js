import express from 'express'
import cartRoutes from './routes/carts.routes.js'
import productRoutes from './routes/products.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//console.log(`${__dirname}`)

// Endpoints
app.use('/api/cart', cartRoutes)
app.use('/api/product', productRoutes)

app.listen(8080, () => console.log('Listening on port 8080'))
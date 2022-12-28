import express from 'express';
import productManager from './productManager.js'

const app = express()
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Pagina Principal')
  })

  app.get('/products', async (req, res) => {
    const { limit } = req.query
    const products = await productManager.getProducts()
    if(!limit) return res.send(products)
    const limited = products.filter(limited => limited.id <= limit)
    res.send(limited)

  })

  app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const products = await productManager.getProducts()
    const product = products.find(product => product.id == id)
    
    if(!product) {
        return res.send('Product not found')
    }
    res.json(product)
})


app.listen(3000, ()=> {console.log('Server running on port 3000')})


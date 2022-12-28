import { Router } from 'express'
import fs from 'fs'

const router = Router()
const products = fs.readFileSync("products.json", 'utf8')
const products_parsed = JSON.parse(products)

router.get('/', (req, res) => {
    const { limit } = req.query
    if(!limit) return res.status(200).json({ products_parsed })
    const products_limited = products_parsed.filter(products_limited => products_limited.id <= limit)
    res.status(200).json({ products_limited })
})

router.get('/:pid', (req, res) => {
    const { pid } = req.params
    const product = products_parsed.find(product => product.id == pid)
    if(!product) {
        return res.send('Product not found')
    }
    res.json(product)
})

router.post('/', async (req, res) => {
    const {title, description, code, price, status, stock, category, thumbnail} = req.body

    if(!title){
        throw new Error("Name is required")
    }

    if(!description){
        throw new Error("Description is required")
    }

    if(!code){
        throw new Error("Code is required")
    }

    if(!price){
        throw new Error("Price is required")
    }

    if(!status){
        throw new Error("Status is required")
    }

    if(!stock){
        throw new Error("Stock is required")
    }

    if(!category){
        throw new Error("Category is required")
    }

    if(!thumbnail){
        throw new Error("Thumbnail is required")
    }

    const product = {
        id : products_parsed.length == 0 ? 1 : products_parsed.length + 1,
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
    }

    products_parsed.push(product)

    res.status(201).json({info: 'Created', product})
    
    await fs.promises.writeFile('products.json', JSON.stringify(products_parsed, null, '\t'))

})

router.put('/:pid', async (req, res) =>{
    const { pid } = req.params
    const { title } = req.body
    const { description } = req.body
    const { code } = req.body
    const { price } = req.body
    const { status } = req.body
    const { stock } = req.body
    const { category } = req.body
    const { thumbnail } = req.body

    products_parsed[id-1].title = title
    products_parsed[id-1].description = description
    products_parsed[id-1].code = code
    products_parsed[id-1].price = price
    products_parsed[id-1].status = status
    products_parsed[id-1].stock = stock
    products_parsed[id-1].category = category
    products_parsed[id-1].thumbnail = thumbnail

    await fs.promises.writeFile('products.json', JSON.stringify(products_parsed, null, '\t'))

    res.json({
        actualizado : pid,
    })
})

router.delete('/:pid', async (req, res) => {
    const {pid} = req.params
    const eliminado = products_parsed.splice((Number(pid) - 1), 1)
    
    res.json({
        eliminado
    })

    await fs.promises.writeFile('products.json', JSON.stringify(products_parsed, null, '\t'))
})

export default router
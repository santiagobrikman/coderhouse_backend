import { Router } from 'express'
import fs from 'fs'

const router = Router()
const carts = fs.readFileSync("carts.json", 'utf8')
const carts_parsed = JSON.parse(carts)

router.get('/:cid', (req, res) => {
    const { cid } = req.params
    const cart = carts_parsed.find(cart => cart.id == cid)
    if(!cart) {
        return res.send('Cart not found')
    }
    res.status(200).json({ cart })
})

router.post('/', async (req, res) => {

    const cart = {
        id : carts_parsed.length == 0 ? 1 : carts_parsed.length + 1,
        products: []
    }

    carts_parsed.push(cart)
    res.status(201).json({info: 'Created', cart})
    
    await fs.promises.writeFile('carts.json', JSON.stringify(carts_parsed, null, '\t'))
})

router.post('/:cid/product/:pid', async (req, res) => {
    const{cid} = req.params
    const{pid} = req.params
    const{quantity} = req.body

    const product_added = {
        id : pid,
        quantity
    }

    if(!quantity){
        throw new Error("Quantity is required")
    }

    const selected = carts_parsed[cid-1].products.find(selected => selected.id == pid)

    if(carts_parsed[cid-1].products.length === 0 ){
        carts_parsed[cid-1].products.push(product_added)
    } else{
        if(!selected) {
            carts_parsed[cid-1].products.push(product_added) // Nuevo producto
        } else{
            selected["quantity"] += quantity // Producto ya existente, aumenta cantidad
        }
    }

    res.status(201).json({info: 'Added to cart', product_added})
    
    await fs.promises.writeFile('carts.json', JSON.stringify(carts_parsed, null, '\t'))
    
})

export default router
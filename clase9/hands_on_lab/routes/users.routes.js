import { Router } from 'express'

const router = Router()
const users = []

router.get('/', (req, res) => {
    res.status(200).json({ users })
})

router.post('/', (req, res) => {
    const {name, username, email} = req.body

    if(!name){
        throw new Error("Name is required")
    }

    if(!username){
        throw new Error("Username is required")
    }

    if(!email){
        throw new Error("Email is required")
    }

    const user = {
        id : users.length == 0 ? 1 : users.length + 1,
        name,
        username,
        email
    }

    users.push(user)

    res.status(201).json({info: 'Created', user})

})

export default router
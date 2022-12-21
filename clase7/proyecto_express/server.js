import express from 'express'
import UserManager from './UserManager.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Pagina principal')
})

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const users = await UserManager.getUsers()
    const user = users.find(user => user.id == id)

    if(!user){
        return res.send('User not found')
    }
    
    res.json(user)
})

app.listen(3000, () => console.log('Listening on port 3000'))
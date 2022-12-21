import express from 'express'

const app = express()

app.get('/bienvenida', (req, res) => {
    res.send('<h1 style = "color:blue;" > Bienvenido a mi pagina web </h1>')
})

app.get('/usuario', (req, res) => {
    const usuario = {
        name: 'Santiago Brikman', 
        age: 23,
        email: 'santiagobrikman@gmail.com'
    }
    res.json(usuario)
})

app.get('*', (req, res) =>{
    res.send('Error')
})

app.listen(3000, () => console.log('Server listeniing on port 3000'))


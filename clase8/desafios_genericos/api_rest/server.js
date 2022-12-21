const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const frase = ['Frase', 'Inicial']

// Endpoints

app.get('/api/frase', (req, res) => {
    res.json({
        frase: frase.join(' ')
    })
})

app.get('/api/palabras/:pos', (req, res => {
    const { pos } = req.params
    res.json({
        buscada: frase[Number(pos) - 1]
    })
}))

app.post('/api/palabras', (req, res) => {
    const {palabra} = req.body
    frase.push(palabra)

    res.json({
        agregada: palabra,
        pos: frase.length
    })
})

app.put('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    const { palabra } = req.body
})

app.listen(3000, () => console.log('Listening on port 3000'))
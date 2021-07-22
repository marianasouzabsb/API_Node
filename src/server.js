const porta = 8080
const express = require('express')
const app = express()

app.get('/produtos', (req,res,next) => {
    res.send({nome: "notebook", preco: 2894.78 })
})

app.listen(porta, () => {
    console.log(`executando ${porta}`)
})
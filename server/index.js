const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

app.use(express.json())


//Endpoints go here

app.get('/api/products', getProducts)

app.get('/api/getproduct/:id', getProduct)


const port = 4444
app.listen(port, () => console.log(`Server running on ${port}`))
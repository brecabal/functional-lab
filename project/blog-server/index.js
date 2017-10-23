const data = require('./data.json')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.get('/posts', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ
})

router.get('/posts/:id', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)


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
     res.json(data)
})

router.get('/posts/:id', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ
    const {id}= req.params
    const post = data.filter((p) =>{
    	return p.id == parseInt(id, 10)
    })[0]

//comprobamos si es que hay algun dato filtrado
    if(typeof post === 'undefined') {
    	res.status(404).json({})
    	return
    }
    res.json(post)
    console.log(id)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)


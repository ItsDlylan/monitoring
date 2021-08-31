const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(4545, ()=> console.log('take us to warp 4545'))
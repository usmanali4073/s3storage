const express = require('express')
const app = express()
const homeRoute = require('./routes/homeRoute');
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))
app.use(homeRoute)



app.listen(port, () => console.log(`Example app listening on port port!`))
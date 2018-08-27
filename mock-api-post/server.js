const express = require('express')
let bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let data = []

app.post('/api/account', (req, res) => {
  let form = req.body.form
  data.push(form)
  res.send(data)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/users/', (req, res) => {
  res.json({'path': req.path})
})

app.get('/api/v1/users/:id', (req, res) => {
  res.json({ 'path': req.path, 'id': req.params.id })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
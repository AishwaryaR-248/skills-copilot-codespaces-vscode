//create web server
const express = require('express')
const app = express()

//parse json
app.use(express.json())

//create web server
const port = 3000
app.listen(port, () => {
  console.log('Server is running on port 3000')
})
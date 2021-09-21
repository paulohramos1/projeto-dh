const express = require('express')
const consign = require('consign')
const app = express()

consign()
    .include('./api')
    .then('./router.js')
    .into(app)


app.listen(3000, () => {
    console.log("Cine house no ar")
})

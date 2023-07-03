const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('online')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX
}

// I have made all of this .env !

/**********************************************************
 * @INFO
 * Bot Coded by PIKACHU#2007  | https://discord.gg/6jbRRHR7fg
 * @INFO
 * Work for  Development | https://discord.gg/6jbRRHR7fg
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/
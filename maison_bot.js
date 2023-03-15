require('dotenv').config()
console.log(process.env.BOT_DISCORD_ON)

if((process.env.BOT_DISCORD_ON) == true)
{
    console.log("true")

const main= require('./BotMaison/main.js')
const server= require('./Capteurs/server.js')}

else{
    console.log("false")

    const server= require('./Capteurs/server.js');}

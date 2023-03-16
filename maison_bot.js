require('dotenv').config()
if((process.env.BOT_DISCORD_ON) === "true")
{
const main= require('./BotMaison/main.js')
const server= require('./Capteurs/server.js')}

else{
    const server= require('./Capteurs/server.js');}

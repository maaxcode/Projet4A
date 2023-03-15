const Discord= require("discord.js")

module.exports= async (bot,message) => {
    let prefix = "!"

    let messageArray = message.content.split(" ")
    let args = messageArray.splice(1)
    let commandName = messageArray[0].slice(prefix.length)

    if(!message.content.startswith(prefix)) return;

    let command = require(`../Commandes/${commandName}`)
    if(!command) return message.reply("Pas de commande")

    command.run(bot, message, args)
}
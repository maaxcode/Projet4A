///Lancer le bot maison
var main = (function() {
    const Discord = require("discord.js")
    const intents = new Discord.IntentsBitField(3276799)
    const bot = new Discord.Client({intents})
    const loadCommands = require("./Loaders/loadCommands")
    const config = require("./config")

    bot.commands = new Discord.Collection()

    bot.login(config.token)
    loadCommands(bot)

    bot.on("messageCreate", async message => {
        if(message.content === "!ping") return bot.commands.get("ping").run(bot, message);
        if(message.content === "!lumOn") return bot.commands.get("Lum").run(message, 1);
    })

    bot.on("ready", async () => {

        console.log(`${bot.user.username} est en ligne!`)

    })
})();

module.exports = main;
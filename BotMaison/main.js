///Lancer le bot maison
var main = (function() {
    const Discord = require("discord.js")
    const intents = new Discord.IntentsBitField(3276799)
    const bot = new Discord.Client({intents})
    const loadCommands = require("./Loaders/loadCommands")
    const loadEvents = require("./Loaders/loadEvents")
    const config = require("./config")

    bot.commands = new Discord.Collection()

    bot.login(config.token)
    loadCommands(bot)
    loadEvents(bot)
    
/*     bot.on("messageCreate", async message => {
        if(message.content === "!ping") return bot.commands.get("ping").run(bot, message);
        if(message.content === "!lumOn" || message.content === "!SwitchOn" || message.content === "!Allumer") {
            return bot.commands.get("Lum").run(message, 1);
        }
        if(message.content === "!lumOff" || message.content === "!SwitchOff" || message.content === "!Eteindre") {
            return bot.commands.get("Lum").run(message, 0);
        }
        if(message.content === "!OpenVolet" || message.content == "!OuvrirVolet" || message.content == "!Ouvrir") {
            return bot.commands.get("Volets").run(message, 1);
        }
        if(message.content === "!CloseVolet" || message.content == "!FermerVolet" || message.content == "!Fermer") {
            return bot.commands.get("Volets").run(message, 0);
        }
        if(message.content === "!Help" || message.content === "!help" || message.content === "!man" || message.content === "!h") {
            return bot.commands.get("Help").run(bot, message);
        }
    }) */
/* 
    bot.on("ready", async () => {

        console.log(`${bot.user.username} est en ligne!`)

    }) */

})();

module.exports = main;
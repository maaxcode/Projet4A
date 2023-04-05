const Discord= require("discord.js")

module.exports = {
    name: "ping",
    category: "Information",
    description: "Affiche la latence",
    options_possibles: "Aucune",

    async run(bot, message) {
        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }
}
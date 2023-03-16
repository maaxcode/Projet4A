const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "help",
    category: "Information",
    description: "Aide pour les commandes du bot",
    options: [
        {
            type: "string",
            name: "commande",
            description: "la commande pour laquelle on veut de l'aide",
            required: false
        }
    ],


    async run(bot, message, args) {
        let command;
        if(args.getString("commande")){
            command = bot.commands.get(args.getString("commande"));
            if(!command) return message.reply("Pas de commande !")
        }
        
        if(!command) {
            let categories = [];
            bot.commands.forEach(command => {
                if(!categories.includes(command.category)) categories.push(command.category)
            })

            let Embed = new Discord.EmbedBuilder()
            .setColor("#0080FF")
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Commandes disponibles : \`${bot.commands.size}\`\nCatégories disponibles : \`${categories.length}\``)
            .setTimestamp()
            .setFooter({text: "Commandes du bot"})

            await categories.sort().forEach(async cat => {
                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\` : ${cmd.description}`).join("\n")}`})
            })

            await message.reply({embeds: [Embed]})
        }

        else {
            let Embed = new Discord.EmbedBuilder()
            .setColor("#0080FF")
            .setTitle(`Commandes ${command.name}`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Nom : \`${command.name}\`\nDescription : \`${command.description}\`\nCategorie : \`${command.category}\``)
            .setTimestamp()
            .setFooter({text: "Commandes du bot"})

            await message.reply({embeds: [Embed]})
        }
    }
}
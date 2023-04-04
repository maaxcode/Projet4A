const Discord = require("discord.js")
const Simulation_Maison = require("../../Capteurs/Simulation_Maison")

module.exports = async ( bot, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete){

        let entry = interaction.options.getFocused()

        if(interaction.commandName === "help"){

            let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choice => ({name: choice.name, value: choice.name})))
        }

        if(interaction.commandName === "temp"){
            let nom_pieces = [`salon`, `chambre`]
            const filteredStrings = entry === '' ? nom_pieces : nom_pieces.filter(s => s.includes(entry));
            const choices = filteredStrings.map(s => ({ name: s, value: s }));

            await interaction.respond(choices);
        }
    }

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`../Commandes/${interaction.commandName}`)
        command.run(bot, interaction, interaction.options)
    }
}
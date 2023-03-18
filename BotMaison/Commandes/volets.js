const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "volets",
    category: "Contrôle Maison",
    description: "Contrôle l'ouverture et la fermeture des volets",
    options:[
        {
            type: "integer",
            name: "ouverture_fermeture",
            description: "Commande l'ouverture ou la fermeture des volets",
            required: true
        }
    ],

    async run(bot, message, args) {
        let descision = args.get("ouverture_fermeture").value
        Simulation_Maison.getInstance().setvolet(descision)
        if(descision===1){
            message.reply(`Les volets s'ouvrent`)
        }
        else if(descision===0){
            message.reply(`Les volets se ferment`)
        }
        else message.reply(`Valeur incorrect, /help lumiere pour de l'aide`)
    }
}
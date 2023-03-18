const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "lumiere",
    category: "Contrôle Maison",
    description: 'Contrôle les lumières de la maison',
    //description2: '!LumOn, !SwitchOn, !Allumer : allume la lumière \n !LumOff, !SwitchOff, !Etiendre : éteins la lumière',
    options_possibles: `0 pour éteindre, 1 pour allumer`,
    options:[
        {
            type: "integer",
            name: "allumer_éteindre",
            description: "commande la lumière",
            required: true
        }
    ],

    async run(bot, message, args) {
        let descision = args.get("allumer_éteindre").value
        Simulation_Maison.getInstance().setlum(descision)
        if(descision===1){
            message.reply(`La lumière est allumée`)
        }
        else if(descision===0){
            message.reply(`La lumière est éteinte`)
        }
        else message.reply(`Valeur incorrect, /help lumiere pour de l'aide`)
    }
}
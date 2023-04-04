const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "volets",
    category: "Contrôle Maison",
    description: "Contrôle l'ouverture et la fermeture des volets",
    options_possibles: "1 pour ouvrir et 2 pour fermer",
    options:[
        {
            type: "integer",
            name: "ouverture_fermeture",
            description: "Commande l'ouverture ou la fermeture des volets",
            required: false
        }
    ],

    async run(bot, message, args) {
        let etat = Simulation_Maison.getInstance().getvolet()
        let etat_com = Simulation_Maison.getInstance().getvolet_com()
        let descision;
        if(args.get("ouverture_fermeture")){
            descision = args.get("ouverture_fermeture").value
        }
        console.log("descision : ", descision)
        if(!descision && descision !== 0){
            if(Math.round(etat)==1){
                message.reply(`Les volets sont ouverts`)
            }
            else{
                message.reply(`Les volets sont fermés`)
            }
        }
        
        else{
            if(descision===1){
                if(Math.round(etat)==0){
                    Simulation_Maison.getInstance().setvolet(descision)
                    message.reply(`Les volets s'ouvrent`)
                }
                else{message.reply(`Les volets sont déjà ouverts`)}
            }
            else if(descision===0){
                if(Math.round(etat)==1){
                    Simulation_Maison.getInstance().setvolet(descision)
                    message.reply(`Les volets se ferment`)
                }
                else{message.reply(`Les volets sont déjà fermés`)}
            
            }
            else message.reply(`Valeur incorrect, /help volets pour de l'aide`)
        }
        
    }
}
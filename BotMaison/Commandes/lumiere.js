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
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        let descision;
        if(args.get("allumer_éteindre")){
            descision = args.get("allumer_éteindre").value
        }
        
        if(!descision && descision !== 0){
            let etat_lum=Simulation_Maison.getInstance().getlum()
            if(etat_lum===true){
                message.reply(`La lumière est actuellement allumée`)
            }
            else if(etat_lum=== false){
                message.reply(`La lumière est actuellement éteinte`)
            }
            else{ message.reply(`Il y a un problème avec la lumière, peut-être une ampoule grillée ?`)}
        }
        else {
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
}
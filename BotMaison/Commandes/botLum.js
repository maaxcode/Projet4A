const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "lumière",
    category: "Contrôle Maison",
    description: 'Contrôle les lumières de la maison (/help Lum pour plus d\'information)',
    description2: '!LumOn, !SwitchOn, !Allumer : allume la lumière \n !LumOff, !SwitchOff, !Etiendre : éteins la lumière',
    options:[
        {
            type: "string",
            name: "ouverture_fermeture",
            description: "commande l'ouverture et la fermeture des volets",
            required: true
        }
    ],

    async run(message, valeur) {
        Simulation_Maison.getInstance().setlum(valeur);
        if(valeur==1){
            await message.reply(`Lumière : ON`);
        }
        else{
            await message.reply(`Lumière : OFF`);
        }
    }
}
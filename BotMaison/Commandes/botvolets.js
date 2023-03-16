const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "volets",
    category: "Contrôle Maison",
    description: "Controle des volets",

    /*async run(message, valeur) {
        Simulation_Maison.getInstance().setvolet(valeur);
        if(valeur==1){
            await message.reply(`Volet : Opened`);
        }
        else{
            await message.reply(`Lumière : Closed`);
        }
    }*/
}
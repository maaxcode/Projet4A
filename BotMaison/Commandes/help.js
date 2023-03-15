const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "help",
    category: "Information",
    description: "Aide pour les commandes du bot",

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
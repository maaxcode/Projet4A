const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "Lum",

    async run(message, valeur) {
        Simulation_Maison.getInstance().setlum(valeur);
        await message.reply(`Lumière : ON`);
    }
}
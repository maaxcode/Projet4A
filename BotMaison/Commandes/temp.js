const Discord= require("discord.js")
const Simulation_Maison = require('../../Capteurs/Simulation_Maison.js')

module.exports = {
    name: "temp",
    category: "Contrôle Maison",
    description: "Contrôle la temperature",
    options_possibles: "Option 1 : le nom de la piece \n Option 2 : la température souhaitée \n Si pas d'option : donne la température actuelle" ,
    options:[
        {
            type: "string",
            name: "piece",
            description: "Piece de la maison",
            required: false,
            autocomplete: true
        },
        {
            type: "integer",
            name: "température",
            description: "Valeur souhaitée en degré celsius",
            required: false,
            autocomplete: false
        }        
    ],

    async run(bot, message, args) {
        let piece;
        let descision;
        if(args.getString("piece")){
            piece = args.getString("piece");
            if(piece != "salon" && piece != "chambre"){
                message.reply("le nom de la pièce est incorrect, /help temp pour de l'aide")
            }
        }
        if(args.get("température")){
            descision = args.get("température").value;
        }

        if(!piece && !descision){ //pas d'option a la commande -> renvoie la temp des deux pieces
            let temp_salon = Simulation_Maison.getInstance().gettemp(0)
            let temp_chambre = Simulation_Maison.getInstance().gettemp(1)
            //console.log(temp_salon)
            message.reply("Il fait " + temp_salon + "°C dans le salon et "+ temp_chambre+ "°C dans la chambre")
        }
        else if(piece && !descision){ //seulement l'option du nom de la piece -> renvoie la temp de cette piece
            if(piece == "salon"){
                let temp_salon = Simulation_Maison.getInstance().gettemp(0)
                //console.log("SALON :", temp_salon)
                message.reply("Il fait "+ temp_salon+"°C dans le salon")
            }
            else if(piece == "chambre"){
                let temp_chambre = Simulation_Maison.getInstance().gettemp(1)
                message.reply("Il fait "+ temp_chambre+"°C dans la chambre")
            }
            else { message.reply("Le nom de la piece est incorrect, /help temp pour de l'aide")}
        }
        else if(piece && descision){//les deux options sont données -> set la temp de la piece voulue à la temp donnée
            if(descision >=10 && descision <=30 ){
                if(piece == "salon"){
                    Simulation_Maison.getInstance().settemp(0, descision)
                    let temp_salon = Simulation_Maison.getInstance().gettemp(0)
                    if(descision<=temp_salon){
                        message.reply(`Vous avez commandé une température de `+ descision + `°C dans le salon, la température descend...`)
                    }
                    else if(descision>=temp_salon){
                        message.reply(`Vous avez commandé une température de `+ descision + `°C dans le salon, la température monte...`)
                    }
                    else message.reply(`Il fait déjà `+ descision + `°C dans le salon`)
                }
                else if(piece == "chambre"){
                    Simulation_Maison.getInstance().settemp(1, descision)
                    let temp_chambre = Simulation_Maison.getInstance().gettemp(1)
                    if(descision<=temp_chambre){
                        message.reply(`Vous avez commandé une température de `+ descision + `°C dans la chambre, la température descend...`)
                    }
                    else if(descision>=temp_chambre){
                        message.reply(`Vous avez commandé une température de `+ descision + `°C dans la chambre, la température monte...`)
                    }
                    else message.reply(`Il fait déjà `+ descision + `°C dans la chambre`)
                }
                else { message.reply("Le nom de la piece est incorrect, /help temp pour de l'aide")}
                
            }
            else message.reply(`Valeur incorrecte, /help temp pour de l'aide`)
        }
        else {//si pas de nom de piece mais une valuer de temperature -> set la temp des deux pieces à cette valeur
            if(descision >=10 && descision <=30 ){
                Simulation_Maison.getInstance().settemp(0, descision)
                Simulation_Maison.getInstance().settemp(1, descision)
                message.reply("Vous avez commandé une température de "+ descision+"°C pour toutes les pièces, la température est en train de changer...")
            }
            else message.reply(`Valeur incorrecte, /help temp pour de l'aide`)
        }      
    }
}

//salon==0 chambre==1
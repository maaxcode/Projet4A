const Volet = require('./Volet.js');
const Lumiere = require('./Lumiere.js');
const Temperature = require('./Temperature.js');

var Simulation_Maison = (function() {
	var constructeur = function() {
		var tempsalon = new Temperature(10,"salon");
		var voletsalon = new Volet(0,"salon");
		var lumsalon = new Lumiere(false,"salon");

		this.gettemp= function() {
			console.log('Simulation_Maison.gettemp(): début')
			console.log( "Température actuelle : " + tempsalon.ValueTemp)
			console.log('Simulation_Maison.gettemp(): fin')

			return tempsalon.ValueTemp;
		}

		this.gettemp_com= function() {
			console.log('Simulation_Maison.gettemp_com(): début')
			console.log( "Température commandée : " + tempsalon.Value_com)
			console.log('Simulation_Maison.gettemp_com(): fin')

			return tempsalon.Value_com;
		}
		
		this.settemp= function(valeur_souhaitée) {
			console.log('Simulation_Maison.settemp(): début')
			tempsalon.Value_com = valeur_souhaitée
			console.log('Température commandée :'+tempsalon.Value_com)
			console.log('Simulation_Maison.settemp(): fin')

		}

		this.getlum= function() {
			console.log( "getlum_simu_maison : "+lumsalon.lumiereOn)
			return lumsalon.lumiereOn;
		}


		this.setlum=  function(value) {
			//return 0 tout est ok, 1 deja allumé, 2 deja eteint
			console.log("Dans le set lum de la simu maison");
			if (value == 1){
				lumsalon.On();}

			if (value == 0){lumsalon.Off();}}

		this.getvolet= function() {
			//console.log('Simulation_Maison.getvolet(): début')
			console.log( "Ouverture actuelle = " + voletsalon.Ouverture)
		//	console.log('Simulation_Maison.getvolet(): fin')
			return voletsalon.Ouverture;
		}

		this.getvolet_com= function() {
			//console.log('Simulation_Maison.getvolet_com(): début')
			console.log( "Commande volet : " + voletsalon.commande)
			//console.log('Simulation_Maison.getvolet_com(): fin')
			return voletsalon.commande;
		}

		this.setvolet= function(isopen) {
			console.log("Simulation_Maison.setvolet(): début");
			voletsalon.commande = isopen 
			console.log("Volet commande : " + voletsalon.commande);
			console.log("Simulation_Maison.setvolet(): fin");
		}	

		this.actualiser_temp = function() {
		
			console.log('Simulation_Maison.actualiser_temp(): début')
			temperature_actuelle  = Simulation_Maison.getInstance().gettemp()
			temperature_commandée = Simulation_Maison.getInstance().gettemp_com()
		

			if(temperature_commandée<temperature_actuelle)
			{
				tempsalon.ValueTemp=tempsalon.ValueTemp-1;
				console.log("Temp_salon = " + tempsalon.ValueTemp);

			}

			if(temperature_commandée>temperature_actuelle)
			{
				tempsalon.ValueTemp=tempsalon.ValueTemp+1;
				console.log("Temp_salon = " + tempsalon.ValueTemp);

			}
			console.log('Simulation_Maison.actualiser_temp(): fin')

		}

		this.actualiser_volet = function(){
			console.log('Simulation_Maison.actualiser_volet(): début')
			volet_actuel = Simulation_Maison.getInstance().getvolet()
			volet_commandé = Simulation_Maison.getInstance().getvolet_com()

			if(volet_commandé == 1 )
			{
				if(volet_actuel<0.9)
				{
					voletsalon.Ouverture=voletsalon.Ouverture+0.1
				}
			}

			if(volet_commandé == 0)
			{
				if(volet_actuel>0.1)
				{
					voletsalon.Ouverture=voletsalon.Ouverture-0.1
				}
			}
			console.log('Simulation_Maison.actualiser_volet(): fin')
		}

		this.Start = function(){

			setInterval(this.actualiser_temp, 10000)
			//setInterval(this.actualiser_volet,1000)

		}
		
	}
	
	var instance = null;
	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new constructeur();
				instance.constructeur = null;
			}
			
			return instance;
		}
	}
})();

Simulation_Maison.getInstance().Start();


module.exports = Simulation_Maison;



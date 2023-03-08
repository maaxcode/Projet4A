const Volet = require('./Volet.js');
const Lumiere = require('./Lumiere.js');
const Temperature = require('./Temperature.js');

var Simulation_Maison = (function() {
	var constructeur = function() {
		var tempsalon = new Temperature(10,"salon");
		var voletsalon = new Volet(0,"salon");
		var lumsalon = new Lumiere(false,"salon");

		this.gettemp= function() {
			console.log( tempsalon.ValueTemp)
			return tempsalon.ValueTemp;
		}
		
		this.settemp= function(valeur_souhaitée) {
			console.log("Dans le set temp de la simu maison");
			tempsalon.GO(valeur_souhaitée);
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
			console.log( voletsalon.Ouverture)
			return voletsalon.Ouverture;
		}

		this.setvolet= function(value) {
			console.log("Dans le set volet de la simu maison");
			if (value == 1){voletsalon.Ouvrir();}
			if (value == 0){voletsalon.Fermer();}

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

module.exports = Simulation_Maison;

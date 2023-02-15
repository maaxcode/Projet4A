var Singleton = (function() {
	var constructeur = function() {
		this.methodePublique = function() {
		}
		
		var methodePrivee = function() {
		}
		
		var prop1, prop2;
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
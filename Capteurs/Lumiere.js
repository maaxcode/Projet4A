class Lumiere{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(lumiereOn,nom){
        this.lumiereOn = lumiereOn;
        this.nom = nom;
    }
    
    On(){  
                this.lumiereOn = true;
                console.log("lumiere:"+this.lumiereOn);}

          

    Off()
    {
                this.lumiereOn = false;
                console.log("lumiere:" +this.lumiereOn);}

}

module.exports = Lumiere;


class Volet{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(Ouverture,nom){
        this.Ouverture = Ouverture;
        this.nom = nom;
        this.commande = 0
    }

}

module.exports = Volet;

class Volet{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(Ouverture,nom){
        this.Ouverture = Ouverture;
        this.nom = nom;
    }
    
    Ouvrir(){ 

                while(this.Ouverture<0.9)
                {
                this.Ouverture= this.Ouverture+0.1;
                console.log(this.Ouverture);}
            }
        
    Fermer()
    {
        while(this.Ouverture>0.1)
        {
        this.Ouverture = this.Ouverture-0.1;
        console.log(this.Ouverture);
        }}

}

module.exports = Volet;

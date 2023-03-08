class Temperature{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(ValueTemp,nom){
        this.ValueTemp = ValueTemp;
        this.nom = nom;
    }
    
    GO(valeur_souhaitée){ 

        if (valeur_souhaitée <= 25 && valeur_souhaitée >= 15)
        {
            while (valeur_souhaitée!=this.ValueTemp)
            {
                if (valeur_souhaitée>this.ValueTemp)
                {
                    this.ValueTemp=this.ValueTemp+1;
                    console.log(this.ValueTemp);
                }else{
                    this.ValueTemp=this.ValueTemp-1;
                    console.log(this.ValueTemp);
                }
            }
        }else 
        console.log("Valeur incorrecte, entrez une valeur comprise entre 15 et 25 ");
    }

}

module.exports = Temperature;

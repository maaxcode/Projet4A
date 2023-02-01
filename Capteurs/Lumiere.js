class Lumiere{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(lumiereOn,nom){
        this.lumiereOn = lumiereOn;
        this.nom = nom;
    }
    
    On(valeur_souhaitée){ 
        if(this.lumiereOn!=valeur_souhaitée)
        {
            if(valeur_souhaitée==1)
            {
                this.lumiereOn = true;
                console.log(this.lumiereOn);}}}

          

    Off(valeur_souhaitée)
    {
        if(this.lumiereOn!=valeur_souhaitée)
        {
            if(valeur_souhaitée==0)
            {
                this.lumiereOn = false;
                console.log(this.lumiereOn);}
            else
        {
            console.log('La valeur pour eteindre la lumiere doit etre 0')
        }}}

}



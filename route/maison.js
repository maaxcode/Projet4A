/*
EntréeTemp = 0;
SortieTemp = 0;
EntréeLum = 0 ;
SortieLum = 0;
EntréeVolet = 0 ;
SortieVolet = 0;
LumiereOn = 0 ;
Ouverturevolet = 0*/

const express = require('express');
const routeur= express.Router();
const Volet = require('../Capteurs/Volet.js');
const Lumiere = require('../Capteurs/Lumiere.js');
const Temperature = require('../Capteurs/Temperature.js');
const Simulation_Maison = require('../Capteurs/Simulation_Maison.js')

var tempsalon = new Temperature(10,"salon");
var voletsalon = new Volet(0,"salon");
var lumsalon = new Lumiere(false,"salon");


routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
    console.log("Dans l'api Test ");

 });
    //Get Entré lumiere, volet et temperature 
/*
    routeur.get('/getentreetemp',(req, res) => {
        res.status(200).json({EntréeTemp});
     });
    
     routeur.get('/getentreelum',(req, res) => {
        res.status(200).json({EntréeLum});
     });
     routeur.get('/getentreevolet',(req, res) => {
        res.status(200).json({EntréeVolet});
     });
*/ 
    //Get sortie lumiere volet et temp

 routeur.get('/getsortietemp',(req, res) => {
    retour = tempsalon.ValueTemp;
    tmp = Simulation_Maison.getInstance().gettemp();
    console.log("avant tmp");
    console.log(tmp);
    console.log("apres tmp");
    res.status(200).json({retour});
 });
 routeur.get('/getsortielum',(req, res) => {
    retour = lumsalon.lumiereOn;
    res.status(200).json({retour});
    
 });

 routeur.get('/getsortievolet',(req, res) => {
    retour = voletsalon.Ouverture;
    res.status(200).json({retour});
 });

//Set entree lumiere temp et volet

 routeur.get('/setentreetemp:value',(req, res) => {

   /* if (req.params.value <= 25 && req.params.value >= 15)
    {
        console.log("Dans le set temp");
        EntréeTemp = req.params.value;
        while (EntréeTemp!=SortieTemp)
        {
            if (EntréeTemp>SortieTemp)
            {
                SortieTemp=SortieTemp+1;
                console.log(SortieTemp);
            }else{
                SortieTemp=SortieTemp-1;
                console.log(SortieTemp);
            }
        }
        res.status(200).json({SortieTemp});
    }else */
    Simulation_Maison.getInstance().settemp(req.params.value);
       
     /*   tempsalon.GO(req.params.value);
        temperature=tempsalon.ValueTemp;*/
        res.status(200).json({message : "good"});

    

    //res.status(201).json({message : "Valeur incorrecte, entrez une valeur comprise entre 15 et 25 "});
    
 });

 routeur.get('/setentreevolet:value',(req, res) => {
/*
    if (req.params.value == 0 || req.params.value == 1 )
    {
        console.log("Dans le set volet");
        EntréeVolet = req.params.value;

        if(EntréeVolet!=SortieVolet)
        {
            if(EntréeVolet== 1)
            {
                while(Ouverturevolet<0.9)
                {
                Ouverturevolet= Ouverturevolet+0.1;
                SortieVolet=1
                console.log(Ouverturevolet);}
        
            }else{
                while(Ouverturevolet>0.1)
                {
                Ouverturevolet = Ouverturevolet-0.1;
                SortieVolet=0
                console.log(Ouverturevolet);
                }
            }
        }
        res.status(200).json({Ouverturevolet});
    }else 
    res.status(201).json({message : 'Valeur incorrecte, entrez une valeur 0 ou 1'});*/

  
    if (req.params.value == 1){voletsalon.Ouvrir();}
    if (req.params.value == 0){voletsalon.Fermer();}
    ouverture = voletsalon.Ouverture;
    res.status(200).json({ouverture});
    
 });

 routeur.get('/setentreelum:value',(req, res) => {
/*
    if (req.params.value == 1 || req.params.value == 0)
    {
        console.log("Dans le set lum");
        EntréeLum = req.params.value;
      
        if(LumiereOn!=EntréeLum)
        {
            if(EntréeLum==1)
            {
                LumiereOn = true;
                console.log(LumiereOn);
            }else{
                LumiereOn = false;
                console.log(LumiereOn);
            }
        }
        res.status(200).json({LumiereOn});
    }else 
    res.status(201).json({message : 'Valeur incorrecte, entrez une valeur 0 ou 1'});*/


    if (req.params.value == 1){lumsalon.On();}
    if (req.params.value == 0){lumsalon.Off();}
    lumiere = lumsalon.lumiereOn;
    res.status(200).json({lumiere});
    
 });


 module.exports = routeur;

EntréeTemp = 0;
SortieTemp = 0;
EntréeLum = 0 ;
SortieLum = 0;
EntréeVolet = 0 ;
SortieVolet = 0;
LumiereOn = 0 ;
Ouverturevolet = 0

const express = require('express');
const routeur= express.Router();
routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });
    //Get Entré lumiere, volet et temperature 

    routeur.get('/getentreetemp',(req, res) => {
        res.status(200).json({EntréeTemp});
     });
    
     routeur.get('/getentreelum',(req, res) => {
        res.status(200).json({EntréeLum});
     });
     routeur.get('/getentreevolet',(req, res) => {
        res.status(200).json({EntréeVolet});
     });

    //Get sortie lumiere volet et temp

 routeur.get('/getsortietemp',(req, res) => {
    res.status(200).json({SortieTemp,});
 });
 routeur.get('/getsortielum',(req, res) => {
    res.status(200).json({SortieLum});
 });

 routeur.get('/getsortievolet',(req, res) => {
    res.status(200).json({ouve});
 });

//Set entree lumiere temp et volet

 routeur.get('/setentreetemp:value',(req, res) => {

    if (req.params.value <= 25 && req.params.value >= 15)
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
    }else 
    res.status(201).json({message : "Valeur incorrecte, entrez une valeur comprise entre 15 et 25 "});
    
 });

 routeur.get('/setentreevolet:value',(req, res) => {

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
    res.status(201).json({message : 'Valeur incorrecte, entrez une valeur 0 ou 1'});
    
 });

 routeur.get('/setentreelum:value',(req, res) => {

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
    res.status(201).json({message : 'Valeur incorrecte, entrez une valeur 0 ou 1'});
    
 });

 module.exports = routeur;
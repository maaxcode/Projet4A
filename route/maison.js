
EntréeTemp = 0
SortieTemp = 0
EntréeLum = false 
SortieLum = true 

if(EntréeLum!=SortieLum)
{
    if(EntréeLum== true)
    {
        LumiereOn = true;
    }else{
        LumiereOn = false;
    }
}


EntréeVolet = false 
SortieVolet = true 




const express = require('express');
const routeur= express.Router();
routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

 routeur.get('/getsortietemp',(req, res) => {
    res.status(200).json({SortieTemp,});
 });

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
        res.status(200).json({EntréeTemp});
    }else 
    res.status(201).json({message : "Valeur incorrecte, entrez une valeur comprise entre 15 et 25 "});
    
 });

 routeur.get('/getsortielum',(req, res) => {
    res.status(200).json({SortieLum});
 });

 routeur.get('/getsortievolet',(req, res) => {
    res.status(200).json({SortieVolet});
 });

 routeur.get('/getentreetemp',(req, res) => {
    res.status(200).json({EntréeTemp});
 });

 routeur.get('/getentreelum',(req, res) => {
    res.status(200).json({EntréeLum});
 });
 routeur.get('/getentreevolet',(req, res) => {
    res.status(200).json({EntréeVolet});
 });




 module.exports = routeur;
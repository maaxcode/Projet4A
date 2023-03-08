

const express = require('express');
const routeur= express.Router();
const Simulation_Maison = require('../Capteurs/Simulation_Maison.js')



routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
    console.log("Dans l'api Test ");

 });
    //Get sortie lumiere volet et temp

 routeur.get('/getsortietemp',(req, res) => {
    
    Actual_temp = Simulation_Maison.getInstance().gettemp();
    res.status(200).json({Actual_temp});
 });
 routeur.get('/getsortielum',(req, res) => {
    Actual_lum = Simulation_Maison.getInstance().getlum();
    res.status(200).json({Actual_lum});
    
 });

 routeur.get('/getsortievolet',(req, res) => {
    Actual_volet_ouverture = Simulation_Maison.getInstance().getvolet();
    res.status(200).json({Actual_volet_ouverture});
 });

//Set entree lumiere temp et volet

 routeur.get('/setentreetemp:value',(req, res) => {

    if(req.params.value<=25 && req.params.value>=15)
    {
        Simulation_Maison.getInstance().settemp(req.params.value);  
        Temp_actual = Simulation_Maison.getInstance().gettemp();  
        res.status(200).json({message : "Températue bien mise a jour !", Temp_actual});
    }else{
            Temp_actual = Simulation_Maison.getInstance().gettemp();  
            res.status(201).json({message : "Valeur incorrecte, entrez une valeur comprise entre 15 et 25 ", Temp_actual });

    }
 
 });

 routeur.get('/setentreevolet:value',(req, res) => {

   // res.status(201).json({message : 'Valeur incorrecte, entrez une valeur 0 ou 1'});
    if(req.params.value == 0)
    {
        Simulation_Maison.getInstance().setvolet(req.params.value);
        Ouverture_actual = Simulation_Maison.getInstance().getvolet();  
        res.status(200).json({message : "Volets fermés !", Ouverture_actual});
    }else if(req.params.value == 1){
        Simulation_Maison.getInstance().setvolet(req.params.value);
        Ouverture_actual = Simulation_Maison.getInstance().getvolet();  
        res.status(200).json({message : "Volets ouverts !", Ouverture_actual});
    }else{
        res.status(201).json({message : "Erreur ,la valeur doit etre 1 ou 0 pour ouvrir ou fermer les volets"});

    }
 });

 routeur.get('/setentreelum:value',(req, res) => {

    if(req.params.value == 0)
    {
        Simulation_Maison.getInstance().setlum(req.params.value);
        Lumiere_actual = Simulation_Maison.getInstance().getlum();  
        res.status(200).json({message : "Lumières éteintes !", Lumiere_actual});
    }else if(req.params.value == 1){
        Simulation_Maison.getInstance().setlum(req.params.value);
        Lumiere_actual = Simulation_Maison.getInstance().getlum();  
        res.status(200).json({message : "Lumières allumées !", Lumiere_actual});
    }else{
        res.status(201).json({message : "Erreur ,la valeur doit etre 1 ou 0 pour allumer ou eteindre les lumières"});

    }
  

 });


 module.exports = routeur;
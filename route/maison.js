const express = require('express');
const routeur= express.Router();
const Simulation_Maison = require('../Capteurs/Simulation_Maison.js')



routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
    console.log("Dans l'api Test ");

 });

   //Get entrée volet et temp(valeur commandée)

   routeur.get('/getcommandetemp',(req, res) => {
    
    Temperature_commandée = Simulation_Maison.getInstance().gettemp_com();
    res.status(200).json({Temperature_commandée});
 });
 routeur.get('/getcommandevolet',(req, res) => {
    Volet_commande = Simulation_Maison.getInstance().getvolet_com();
    res.status(200).json({Volet_commande});
    
 });

    //Get sortie lumiere volet et temp

 routeur.get('/getsortietemp',(req, res) => {
    
    Temperature_actuelle = Simulation_Maison.getInstance().gettemp();
    res.status(200).json({Temperature_actuelle});
 });
 routeur.get('/getsortielum',(req, res) => {
    IsOn = Simulation_Maison.getInstance().getlum();
    res.status(200).json({IsOn});
    
 });

 routeur.get('/getsortievolet',(req, res) => {
    Ouverture_actuelle = Simulation_Maison.getInstance().getvolet();
    
    if(Math.round(Ouverture_actuelle)==1)
    {
    res.status(200).json({message : "Volets ouverts !", Ouverture_actuelle});}  

    if(Math.round(Ouverture_actuelle)==0)
    {
        res.status(200).json({message : "Volets fermés !", Ouverture_actuelle});}
    });

//Set entree lumiere temp et volet

 routeur.get('/setentreetemp:value',(req, res) => {

    if(req.params.value<=25 && req.params.value>=15)
    {
        Simulation_Maison.getInstance().settemp(req.params.value)
        Temperature_commandée = Simulation_Maison.getInstance().gettemp_com()
        Temperature_actuelle = Simulation_Maison.getInstance().gettemp()

        res.status(200).json({message : "Commande de température bien mise a jour !",Temperature_commandée, Temperature_actuelle});
    }else{
        Temperature_commandée = Simulation_Maison.getInstance().gettemp_com()
        Temperature_actuelle = Simulation_Maison.getInstance().gettemp() 
        res.status(201).json({message : "Valeur incorrecte, entrez une valeur comprise entre 15 et 25 ", Temperature_commandée,Temperature_actuelle });

    }
 
 });

 routeur.get('/setentreevolet:value',(req, res) => {

    if(req.params.value == 0 || req.params.value == 1)
    {
        Simulation_Maison.getInstance().setvolet(req.params.value);
        Ouverture_actuelle = Simulation_Maison.getInstance().getvolet();  
        Volet_commande = Simulation_Maison.getInstance().getvolet_com()
        res.status(200).json({message : "Commande des volet bien mise a jour !", Volet_commande,Ouverture_actuelle});
    
    }else{
        res.status(201).json({message : "Erreur ,la valeur doit etre 1 ou 0 pour deamander à ouvrir ou fermer les volets"});

    }
 });

 routeur.get('/setentreelum:value',(req, res) => {

    if(req.params.value == 0)
    {
        Simulation_Maison.getInstance().setlum(req.params.value);
        Is_On = Simulation_Maison.getInstance().getlum();  
        res.status(200).json({message : "Lumières éteintes !", Is_On});
    }else if(req.params.value == 1){
        Simulation_Maison.getInstance().setlum(req.params.value);
        Is_On = Simulation_Maison.getInstance().getlum();  
        res.status(200).json({message : "Lumières allumées !", Is_On});
    }else{
        res.status(201).json({message : "Erreur ,la valeur doit etre 1 ou 0 pour allumer ou eteindre les lumières"});

    }
 });


 module.exports = routeur;
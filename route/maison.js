
EntréeTemp = 10
SortieTemp = 25
EntréeLum = false 
SortieLum = true 
EntréeVolet = false 
SortieVolet = true 


const express = require('express');
const routeur= express.Router();
routeur.use('/test',(req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

 routeur.get('/getsortietemp',(req, res) => {
    res.status(200).json({SortieTemp});
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
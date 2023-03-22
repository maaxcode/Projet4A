# Projet 4A (Serveur domotique)

Notre projet consiste à simuler les entrées et sorties d'une maison et de pouvoir les contrôler à l'aide d'un serveur node.js avec une interface web disponible et une interface grâce au logiciel Discord avec l'aide d'un Bot .


## Installation
- Pour commencer il va falloir cloner le projet sur votre machine :
	- Avec git  
	```git clone https://github.com/maaxcode/Projet4A.git /dossier_réception```
	- Sans git  
		```
			 wget https://github.com/maaxcode/Projet4A/archive/main.zip
		     unzip main.sip
		     cd aurl
- Il va ensuite falloir installer les dépendances dont le projet a besoin  
	```npm install```
	
- Puis installer nodemon qui permettra de lancer le serveur automatique a chaque changement dans le code :  
	```npm install -g nodemon```

## Configuration
- Enfin il va falloir compléter les variables d'environement que le projet utilise, pour se faire , il faut se rendre dans le fichier " .env.example", vous y trouverez ces variables qu'il faudra completer selon vos gouts ou votre configuration :
	- **TOKEN** : le token de votre bot que vous aurez préalablement créer via votre compte discord ( n'oublier pas d'activer le mode développeur) 
	- **NODE_ENV** : a completer par "development" ou "production"
	- **PORT** : Le port que vous souhaitez utiliser pour l'interface web
	- **BOT_DISCORD_ON** : Si vous souhaitez activer le bot discord afin d'avoir accès a l'API web et le démarage du bot . "true" pour le démarer , "false" pour n'avoir que le serveur domatique et l'API web.

## Start le projet
 - Pour lancer le serveur , placer vous dans le dossier du projet dans un cmd  
	```nodemon maison_bot.js```

##  Utiliser le projet

### Avec l'API web
- Ouvrir un navigateur web et se connecter a l'adresse suivante :    
> localhost:4200/api/test

Vous allez normalement obtenir une page avec un message JSON disant : "Votre requête a bien été reçue !"

- Vous pouvez maintenant utiliser l'API en remplaçant "/test" avec les adresses suivantes:
	 - ```/getcommandetemp:index``` : permet d'obtenir la température commandée pour le capteur d'index i(0 pour le salon,1 pour la chambre)
	
	 - ```/getcommandevolet```: permet d'obtenir la commande du volet (retourne 0 si la commande est de fermée le volet, 1 si l'ouverture a été demandée)
	 
	 - ```/getsortietemp:index``` : permet d'obtenir la température actuelle du capteur i(0 salon, 1 chambre)
	 
	 - ```/getsortielum``` : permet d'obtenir l'état actuel de la lampe : On ou off
	 
	 - ```/getsortievolet```: permet d'obtenir l'ouverture actuelle du volet(Ouverture a 0 : volet fermé. Ouverture a 1: volet ouvert .Entre les deux : volet en cours d'ouverture ou fermeture selon la commande)
	 
	 - ```/setentreetemp:index,:value```: permet de donner une température consigne avec "value" à un capteur précis avec "l'index". 
	 Je veux commander 24 degrés dans mon salon : ```/setentreetemp0,24```
	 
	 - ```/setentreevolet:value```: permet de commander l'ouverture ou la fermeture du volet(0 pour la fermeture, 1 pour l'ouverture)
	 
	 - ```/setentreelum:value```:permet de commander l'état de la lampe(1 pour l'allumer,0 pour l'éteindre)

***A noter qu'il ne faut pas écrire les ":" dans les requêtes c'est simplement pour l'utilisation interne du code qui permet de récupérer le paramètre .***

### Avec discord 

- Dans un premier temps , il faut avoir créer son propre serveur discord, ou disposer des droits d'administrateur.
- Avoir créer son bot discord et récupérer son token afin de lier le code au bot(*cf partie config*)


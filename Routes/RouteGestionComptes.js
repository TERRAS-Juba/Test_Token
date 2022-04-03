
const express = require('express')
const routerGestionComptes= express.Router()

const controllerGestionComptes= require('../Controllers/ControllerGestionComptes')

routerGestionComptes.delete('/gestioncomptes/supprimer_locataire/:id',controllerGestionComptes.deleteLocataire);
routerGestionComptes.delete('/gestioncomptes/supprimer_decideur/:id',controllerGestionComptes.deleteDecideur);
routerGestionComptes.delete('/gestioncomptes/supprimer_atc/:id',controllerGestionComptes.deleteATC);
routerGestionComptes.delete('/gestioncomptes/supprimer_am/:id',controllerGestionComptes.deleteAM);
routerGestionComptes.post('/gestioncomptes/ajouter_locataire/',controllerGestionComptes.addLocataire);
routerGestionComptes.post('/gestioncomptes/ajouter_decideur/',controllerGestionComptes.addDecideur);
routerGestionComptes.post('/gestioncomptes/ajouter_atc/',controllerGestionComptes.addATC);
routerGestionComptes.post('/gestioncomptes/ajouter_am/',controllerGestionComptes.addAM);

module.exports= routerGestionComptes
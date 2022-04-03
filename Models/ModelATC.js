const pool=require("../config/config_pool")

// Recuperer la liste des locataires
const getATCs = async (request, response) => {
  pool.query('SELECT * FROM atc', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
// Recuperer un ATC avec un id
const getATCById = async (request, response) => {
  let id = request.params.id
  pool.query('SELECT * FROM atc WHERE id_atc=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
// Recuperer un ATC avec son email
const getATCByEmail = async (request, response) => {
  let email = request.params.email
  pool.query('SELECT * FROM atc WHERE email=$1', [email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
// Ajouter un ATC dans la BDD
const addATC = async (request, response) => {
  let body = request.body
  pool.query('INSERT INTO atc(id_atc, nom, prenom, numero_telephone, email, mot_de_passe,est_root,photo_atc)VALUES ($1, $2, $3, $4, $5, $6,$7,$8)',
    [body.id, body.nom, body.prenom, body.numero_telephone, body.email, body.mot_de_passe,body.est_root,body.photo_atc], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200)
    })
}
// Mettre a jour les informations d'un ATC
const updateATC = async (request, response) => {
  let id=request.params.id
  let body = request.body
  pool.query('UPDATE atc SET nom=$2, prenom=$3, numero_telephone=$4, email=$5, mot_de_passe=$6, est_root=$7, photo_atc=$8 WHERE id_atc=$1',
    [id, body.nom, body.prenom, body.numero_telephone, body.email, body.mot_de_passe,body.est_root,body.photo_atc], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200)
    })
}
// Supprimer un ATC
const deleteATC = async (request, response) => {
  let id=request.params.id
  pool.query('DELETE FROM atc WHERE id_atc=$1',
    [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200)
    })
}
//Exporter les fonctions du modele
module.exports = {
  getATCById,
  getATCByEmail,
  getATCs,
  addATC,
  updateATC,
  deleteATC
}
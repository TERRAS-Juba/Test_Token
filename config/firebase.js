
//======================================================================================================
//                                      Méthode d'authentification 1
//======================================================================================================
/*
//Importer les fonctions de firebase pour l'authentification
const { initializeApp } = require("firebase/app")
const { getAuth } = require("firebase/auth")

// Informations de la configuration de l'application firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPt_6W95_a63qCoapur-C9mzz9uJGG1uY",
  authDomain: "autotek-8c725.firebaseapp.com",
  projectId: "autotek-8c725",
  storageBucket: "autotek-8c725.appspot.com",
  messagingSenderId: "331835875863",
  appId: "1:331835875863:web:196d016fc1488af40c7252",
  measurementId: "G-67MEGP9H81",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Verifier un token d'un utilisateur
const verifyToken = async (request) => {
  return new Promise((resolve, reject) => {
    let token
    let uid
    if(request.method==="GET"){
      console.log("GET")
      token=request.headers.token
      uid=request.headers.id
    }else{
      console.log("AUTRES")
      token=request.body.token
      uid=request.body.id
    }
    getAuth(initializeApp(firebaseConfig)).verifyIdToken(token).then((decodedToken) => {
      const uid_firebase = decodedToken.uid;
      console.log("le token decodé est == "+uid_firebase)
      resolve("Succes")
    })
      .catch((error) => {
        reject(new Error('Requete refusée'))
      });
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      reject(new Error('Erreur de deconnexion'))
    })
  })
}

// Exporter la fonction de verification du token
module.exports =
{
  verifyToken
}
*/

//======================================================================================================
//                                      Méthode d'authentification 2
//======================================================================================================

// Importer les fonctions de firebase pour l'authentification
const { initializeApp } = require("firebase/app")
const { getAuth} = require("firebase/auth")
var admin = require("firebase-admin");
var serviceAccount = require("./autotek-8c725-firebase-adminsdk-7tu4s-24ed0288bc.json");
const Logger = require("nodemon/lib/utils/log");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Informations de la configuration de l'application firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPt_6W95_a63qCoapur-C9mzz9uJGG1uY",
  authDomain: "autotek-8c725.firebaseapp.com",
  projectId: "autotek-8c725",
  storageBucket: "autotek-8c725.appspot.com",
  messagingSenderId: "331835875863",
  appId: "1:331835875863:web:196d016fc1488af40c7252",
  measurementId: "G-67MEGP9H81",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Verifier un token d'un utilisateur
const verifyToken = async (request) => {
  return new Promise((resolve, reject) => {
    let token
    let uid
    if (request.method === "GET") {
      console.log("GET")
      token = request.headers.token
      uid = request.headers.id
    } else {
      console.log("AUTRES")
      token = request.body.token
      uid = request.body.id
    }
    admin.auth().verifyIdToken(token).then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid)
      resolve(10)
    }).catch((error) => {
      reject(new Error('Requete refusée'))
    });
  })
}

// Exporter la fonction de verification du token
module.exports =
{
  verifyToken
}

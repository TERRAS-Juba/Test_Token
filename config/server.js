const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port =process.env.PORT || 3000
const routeMobileAuthentification = require('../Routes/RouteMobileAuthentification.js')
const routeWebAuthentification = require('../Routes/RouteWebAuthentification.js')
const routeGestionProfils = require('../Routes/RouteGestionProfils')
const routeGestionComptes = require('../Routes/RouteGestionComptes.js')
const cors=require("cors")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(cors({
    origin:"*"
}))
app.use("/", routeMobileAuthentification)
app.use("/", routeWebAuthentification)
app.use("/",routeGestionProfils)
app.use("/",routeGestionComptes)
app.get('/', (req, res) => {
    res.send('Autotek Web server')
})

app.listen(port, () => console.log('Server running on port 3000 ...'))

module.exports = {
    app
}
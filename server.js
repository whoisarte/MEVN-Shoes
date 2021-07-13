const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const session = require('express-session');
const config = require('./config/Config.js')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}
const path = require('path');
const multer = require('multer');
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'clavesecretaapprevisionespeliculasfinal';

const app = express();
const router = express.Router();
const serverStatic = require('serve-static');
const history = require('connect-history-api-fallback');
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: false }
}));
app.use(passport.initialize());
app.use(passport.session());

//Conectar a mongoDB
const options = {useNewUrlParser: true, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(config.DB, options).then(
  () => { console.log('Conectado a la Base de datos') },
  err => { console.log(err) }
);

// Agregar la inclusion de controladores
fs.readdirSync("controllers").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./controllers/" + file)
    route.controller(app)
  }
})
app.use(history());
app.use(express.static(path.join(__dirname + "/dist")));


/*----------------------------------------------------------------------------------*/

router.get('/', function(req, res) {
  res.json({ message: 'API Inicializada!' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port,function() {
  console.log(`api corriendo en el puerto ${port}`);
});
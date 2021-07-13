const User = require('../models/User.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports.controller = (app) => {
    // estrategia local
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, (email, password, done) => {
        if (err) { return done(err); }
        if (!user) { return done(null , false); }
        User.comparePassword(password, user.password, (error, isMatch) => {
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false);
        });
        return true;
    }));
    // Registrar un Usuario
    app.post('/users/register', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const newUser = new User ({
            name,
            email,
            password
        });
        User.createUser(newUser, (error, user) => {
            if(error) {
                res.status(422).json({
                    message: 'Ocurrio algo malo, por favor intente de nuevo en algunos minutos',
                });
                console.log(error); }
            res.send({ user });
        });
    });

// ingresar un usuario
app.post('/users/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
function(req, res) {
    res.redirect('/');
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
   
};



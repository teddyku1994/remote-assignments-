const express = require('express');
const User = require('../core/user');
const router = express.Router();
const pool = require('../core/pool');

// create an object from the class User in the file core/user.js
const user = new User();

// Get the index page
router.get('/', (req, res, next) => {
    let user = req.session.user;
    if(user) {
        res.redirect('/home');
        return;
    }
    // IF not we just send the index page.
    res.render('index', {title:"Home Page"});
})

// Get home page
router.get('/home', (req, res, next) => {
    let user = req.session.user;

    if(user) {
        res.render('home', {opp:req.session.opp, name:user.email});
        return;
    }
    res.redirect('/');
});

// Post login data
router.post('/', (req, res, next) => {
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            res.redirect('/home');
        }else {
            // if the login function returns null send this error message back to the user.
            res.render('index-fail');
        }
    })

});

// Post register data
router.post('/register', (req, res, next) => {
    let userInput = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const { username, email, password} = req.body;

    user.create(userInput, function(lastId) {
        if(!username || !email || !password) {
            res.render('index-fail2')
        } else {
          let sqlCheck = "SELECT * FROM users WHERE username = ?"
          pool.query(sqlCheck, username, function(err, result) {
          if(err){
              callback(err)
            }

          if(result.length > 1){
            let sql = "DELETE FROM users WHERE id = ? "
            let id = result[1].id
            pool.query(sql, id, function(err, result){
                if(err) {
                    throw err;
                }
                console.log ("Number of records deleted: " + result.affectedRows)
            })  
            res.render('index-fail3')
            } else {
              let sqlCheck2 ="SELECT * FROM users WHERE email = ?"
              pool.query(sqlCheck2, email, function(error, results){
                if(error){
                  callback(error)
                }
                if(results.length > 1) {
                    let sql2 = "DELETE FROM users WHERE id = ? ";
                    let id2 = results[1].id
                    pool.query(sql2, id2, function(err, result){
                        if(err){
                            throw err;
                        } else {
                            console.log("Number of records deleted: " + result.affectedRows)
                        }
                    })
                    res.render('index-fail4');
                } else {
                  if(lastId) {
                    user.find(lastId, function(result) {
                        req.session.user = result;
                        req.session.opp = 0;
                        res.redirect('/home');
                        
                    });
    
                } else {
                  console.log('Error creating a new user ...');
              }
                }
              })
              
            }
          })
        }
    });

});


// Get loggout page
router.get('/loggout', (req, res, next) => {
    // Check if the session is exist
    if(req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;
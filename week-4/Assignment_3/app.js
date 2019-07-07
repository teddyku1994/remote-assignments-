const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();

// for body parser
app.use(express.urlencoded( { extended : false}));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Template 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Session
app.use(session({
    secret:'youtube_video',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


// Routers
app.use('/', pageRouter);


// Errors 
app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

// Handling errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// Setting up the server
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = app;
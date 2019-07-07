const express = require('express');
const app = express ();
const port = 3000;

// For the body parser
const bodyPasrser = require('body-parser');
app.use(bodyPasrser.urlencoded({ extended: false }));
app.use(bodyPasrser.json());

// Template
app.set('view engine', 'pug');

// Serve Static Files
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Assignment listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.redirect('/test.html');
});

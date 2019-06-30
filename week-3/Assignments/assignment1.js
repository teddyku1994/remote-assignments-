const express = require('express');
const bodyPasrser = require('body-parser');
const cookiePasrser = require('cookie-parser');
const app = express ();
const port = 3000;
app.use(bodyPasrser.urlencoded({ extended: false }));
app.use(cookiePasrser());

app.set('view engine', 'pug');

app.use(express.static('public'))

const routes = require('./router');

app.use(routes)

app.listen(port, () => {
    console.log(`Assignment listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render('index');
});
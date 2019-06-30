const express = require('express');
const router = express.Router();


const calc = (num) => {
    result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result.toString();
}

router.get('/getData', (req, res) => {
    let num = req.query.number;
    let ans = calc(num);
    if (num === undefined) {
        res.send('<h1>Lack of Parameter</h1>'); 
    } else if (parseInt(ans) > 0) {
        res.send(`<h1> The Answer: ${ans}</h1>`);
    } else {
        res.send('<h1>Wrong Parameter</h1>')
    }
})

router.get('/myName', (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.render('myName', { name })
    } else {
        res.redirect('/trackName');
    }
});

router.get('/trackName', (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.redirect('/myName')
    } else {
        res.render('myName')
    } 
});

router.post('/trackName', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('myName', {name: req.body.username});
});

router.post('/myName', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('myName', {name: req.body.username});
});

router.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});

module.exports = router;
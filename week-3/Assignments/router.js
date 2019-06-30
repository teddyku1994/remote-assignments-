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
    const {number} = req.query;
    let num = req.query.number;
    let ans = calc(num);
    if (num === undefined) {
        res.send('<h3>Lack of Parameter</h3>'); 
    } else if (parseInt(ans) > 0) {
        res.send(`<h3> The Answer: ${ans}</h3>`);
    } else if (parseInt(ans) <= 0) {
        res.send('<h3>Wrong Parameter</h3>')
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
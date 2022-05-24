require('dotenv').config();
const { MESSAGE_STYLE } = process.env
let express = require('express');
let app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}), (req, res) => {
    res.json({time: req.time})
}

app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.json({echo: word})
})

app.get('/name', (req,res) => {
    const { first, last } = req.query;
    res.json({name: `${first} ${last}` })
})

app.post('/name', (req, res) => {
    const {first, last} = req.body
    res.json({name: `${first} ${last}`});
})


 module.exports = app;

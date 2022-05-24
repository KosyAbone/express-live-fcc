require('dotenv').config();
const { MESSAGE_STYLE } = process.env
let express = require('express');
const res = require('express/lib/response');
let app = express();


console.log("Hello World")

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


app.get('/json', (req,res) => {
   res.json(MESSAGE_STYLE == "uppercase" ? {"message": "HELLO JSON"} : {"message": "Hello json"})
})



// console.log(__dirname + '/public')





 module.exports = app;

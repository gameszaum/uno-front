const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const path = require('path');
const ejs = require('ejs');

app.engine('.html', ejs.__express);
app.set('views', path.join('./src/views/'));
app.set('view engine', 'ejs');
app.use(express.static(path.join('./src/public')));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(process.env.PORT, function (err) {
    if (err) throw err;
    console.log('Client Listening on port', process.env.PORT);
});
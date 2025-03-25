const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/image', (req, res) => res.render('image'));
app.get('/content', (req, res) => res.render('content'));
app.get('/link', (req, res) => res.render('link'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

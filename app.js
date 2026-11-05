import express from 'express';

//set up a express instance
const app = express();

const PORT = 3000; // Choose an available port number

//config ejs
app.set('view engine', 'ejs');

//tell view files where to start looking from
app.use(express.static('public'));

//at home page, render home.ejs
app.get('/', (req, res) => {

  res.render('home', {name: 'Donald Duck', job: 'Actor', favourite_colour: 'Blue'});

});

//this is the port our instance will live at
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


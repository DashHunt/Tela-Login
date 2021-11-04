const express = require('express');
let bodyParser = require('body-parser');
const app = express();


const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('views', './views'); 
app.set('view engine', 'ejs');

app.get('', (req, res) =>{
    res.render('index')
})

app.get('/sucess', (req, res) =>{
    res.render('sucess')
})

app.post('/create-contact', bodyParser.urlencoded({ extended: false}), (req, res, next) =>{

    let nome = req.body.fname;
    let password = req.body.fpassword;
    let age = req.body.fidade;

    let cadastro = [nome, password, age];
    var json = JSON.stringify(cadastro);

    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', (error) => {
        if(error) throw error;
        
        console.log('Adicionado com sucesso');
    });

    res.redirect('/sucess')
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});
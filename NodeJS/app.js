var express = require('express');
var app = express();
var msg = require('./mod_teste')();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});


app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.get('/beleza', function(req, res){
    res.send("<html><body>Portal de Beleza</body></html>");
});

app.listen(3000, function(){
    console.log(msg);
});
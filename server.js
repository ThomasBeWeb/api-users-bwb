//Import du framework express
var express = require("express");
//Creation d'un objet express
var app = express();

//Recup de bodyparser
var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

//LISTEN
app.listen(8282,"192.168.1.59");

console.log("Serveur OK");

//Vérifie que les informations reçues correspondent à l’utilisateur
app.post('/verify',
    function(request,response){
        
        response.header('Access-Control-Allow-Origin','*');
        
        //Recupere les infos à tester
        var userTest = request.body;
        
        if((userTest.username === user.username) && (userTest.password === user.password)){
            response.status(200).send();
            user.connected = true;
        }else{
            response.status(401).send();
        }
    }
);

//Retourne un status 200 si l’utilisateur est connecté et 401 sinon

app.get('/connected',

    function(request,response){
        
        response.header('Access-Control-Allow-Origin','*');
        
        if(user.connected === true){
            response.status(200).send();

        }else{
            response.status(401).send();
        }
    }
);

user = {
username : "administrateur",
password : "1234",
connected : false
}


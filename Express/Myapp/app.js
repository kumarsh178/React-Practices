const express = require("express");
const app = express();

app.get('/ping',(request,response) => {
 response.send("Pong here");
});
app.route('/users').get(function(request,response,next){
    response.send(request.method);
}).post(function(request,response,next){
    response.send(request.method);
}).put(function(request,response,next){
    response.send(request.method);
}).delete(function(request,response,next){
    response.send(request.method);
});
app.listen(8080,'localhost');
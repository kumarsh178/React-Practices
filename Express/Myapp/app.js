const express = require("express");
const app = express();

app.get('/ping',(request,response) => {
 response.send("Pong here");
});
app.listen(8080,'localhost');
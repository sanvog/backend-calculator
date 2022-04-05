const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

//INDEX ROUTE
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
}); //this is sending entire index.html page. Path to reach the index.html.

/*app.get('/', (req, res) => {
  res.send('Hello World!');
}); //this is sending only bits of data.*/

app.post("/", function(req, res){
    
var num1 = Number(req.body.num1); //num1 is from input attribute in index.html
var num2 = Number(req.body.num2);//req.body is the bodyParsed data in text form. Needs to be converted into a number.

var result = num1 + num2;

    res.send("The result of the calculation is" + result);
});

//BMI ROUTE
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var resultBMI = (weight/(height*height));

    res.send("Your BMI is " + resultBMI);//send back result

})

//PORT LISTEN
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

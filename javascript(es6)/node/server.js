// Import the library
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const server = require('server');
const foods = require("./foods")
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const msg = [
    {vmi : "anyad"},
    {masikvmi : "anyád ékezettel"},
    {hvmi : "mondjuk a kurva anyád"}
]

/*

  
/* const vmi = msg[getRandomInt(2)] 
console.log(hambi[getRandomInt(2)])
console.log(vmi)
*/

/*
hambi.forEach(function (ham) {
    console.log(ham);
    console.log(ham.id);
    console.log(ham.name);
    console.log(ham.description);
    console.log(ham.price);
    let asd = [ ham.name,ham.price ]
  });


for (var ham of hambi) {
    console.log(ham.name);
  }

for (var [key, value] of msg) {
    console.log(key + ", " + value);
}



for (let nev of nevek) {
    console.log(nev.name)
    MongoClient.connect(url, function(err, db) {
    var dbo = db.db("amiburger");
    dbo.createCollection(nev.name, function(err, res) {
        console.log(res);
        db.close()})
    }  
    )};
 



*/



// Launch the server to always answer "Hello world"
// server(ctx => hambi);

// console.log(foods.foods.hambi)
/*
const nevek = [
    {name : "hambi"},
    {name : "hotdog"},
    {name : "wrap"},
    {name : "salad"},
    {name : "kentucky"},
    {name : "pizza"},
    {name : "koret"},
    {name : "sauce"},
    {name : "drink"},
    ];
    */
    MongoClient.connect(url, function(err, db) {
    var dbo = db.db("amiburger");
    dbo.collection("drink").insertMany(foods.foods.drink, function(err, res) {
        db.close()})
    })
 

/*
for (var ham of foods.foods.hambi) {
    console.log(ham.name);
  }
 */ 
// Import the library
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const server = require('server');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const msg = [
    {vmi : "anyad"},
    {masikvmi : "anyád ékezettel"},
    {hvmi : "mondjuk a kurva anyád"}
]

const hambi = [
    {"id": 1, "name": "Ami burger", "price": 1080, "menuPrice": 1560,
        "description": "házi buci, 15dkg marhahúspogácsa, saláta, karamellizált hagyma, cheddar sajt, bacom,paradicsom, uborka, kétféle házi szósz"},
    {"id": 2, "name": "Szaftos lüszi", "price": 1280, "menuPrice": 1760,
        "description": "házi buci, 15dkg cheddarral töltött marhahúspogácsa, saláta, karamellizált hagyma, bacon, paradicsom, jalapeno,sárga szósz"},
    {"id": 3, "name": "big kahuna", "price": 1180, "menuPrice": 1660,
        "description": "házi buci, 15dkg marhahúspogácsa, coles law, cheddar sajt, bacon, paradicsom, ketchup, mustár"}
    ];
  
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
*/

// Launch the server to always answer "Hello world"
// server(ctx => hambi);


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("amiburger");
  dbo.createCollection("foods", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
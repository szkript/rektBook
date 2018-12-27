// Import the library
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
*/

// Launch the server to always answer "Hello world"
server(ctx => hambi);



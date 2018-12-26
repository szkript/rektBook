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
        "description": "házi buci, 15dkg marhahúspogácsa, coles law, cheddar sajt, bacon, paradicsom, ketchup, mustár"},
    {"id": 4, "name": "Rodeo BBQ", "price": 1280, "menuPrice": 1760,
        "description": "házi buci, 15dkg marhahúspogácsa, saláta, vöröshagyma, cheddar sajt, paradicsom, bacon, hagymakarika, bbq szósz"},
    {"id": 5, "name": "Ami King", "price": 1680, "menuPrice": 2060,
        "description": "házi buci, 2db 15dkg marhahúspogácsa, dupla cheddar, saláta, hagyma, bacon, uvorka,sárga szósz)"},
    {"id": 6, "name": "Hawaii", "price": 1180, "menuPrice": 1760,
        "description": "házi buci, 15dkg marhahúspogácsa, saláta, ananász, sonak, mézes bbq szósz"},
    {"id": 7, "name": "Retro", "price": 1080, "menuPrice": 1560,
        "description": "jégsaláta, csalamádé, friss paradicsom, kígyóubi, vöröshagyma"},
    {"id": 8, "name": "Ami blú", "price": 1380, "menuPrice": 1860,
        "description": "házi buci, 15dkg marhahúspogácsa, rukkola, kéksajt, karamellizált hagyma, paradicsom, kéksajt szósz"},
    {"id": 9, "name": "Csirkés", "price": 980, "menuPrice": 1460,
        "description": "házi buci, grillezett csirkemell, saláta, cheddar sajt, paradicsom, ketchup, majonéz"},
    {"id": 10, "name": "Kentucky csirkés", "price": 1280, "menuprice": 1760,
        "description": "házi buci, kentucky csirke, saláta, vöröshagyma, cheddar , paradicsom, bacon, majonéz, bbq szósz"},
    {"id": 11, "name": "Sajtburger", "price": 980, "menuprice": 1460,
        "description": "házi buci,15dkg marhahúspogácsa, saláta, vöröshagyma,  cheddar, uborka, ketchup,mustár"},
    {"id": 12, "name": "Mézes Mustáros", "price": 680, "menuprice": 2060,
        "description": "házi buci, 2db 15dkg marhahúspogácsa, dupla cheddar, bacon, saláta, vöröshagyma, lyoni hagyma, paradicsom, uborka, jalapeno,mézes mustár"}
];
  
const vmi = msg[getRandomInt(2)]

console.log(vmi)
// Launch the server to always answer "Hello world"
server(ctx => vmi);



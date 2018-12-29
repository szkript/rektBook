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

// eslint-disable-next-line
const hotdog = [
    {"id": 1, "name": "Ami dog", "price": 780, "menuPrice": 1260,
        "description": "házi kifli, grillezett virsli, saláta, paradicsom, uborka, lyoni hagyma, ketchup, mustár"},
    {"id": 2, "name": "Yankee", "price": 880, "menuPrice": 1360,
        "description": "házi kifli, grillezett virsli, saláta, bacon, coles law"},
    {"id": 3, "name": "BBQ", "price": 880, "menuPrice": 1360,
        "description": "házi kifli, grillezett virsli, saláta, bacon, lyoni hagyma, bbq szósz"},
    {"id": 4, "name": "Nachos", "price": 880, "menuPrice": 1360,
        "description": "házi kifli, grillezett virsli,bacon, cheddar , saláta, uborka, nachos chips, ketchup, mustár"},
    {"id": 5, "name": "Hun Dog", "price": 880, "menuPrice": 1360,
        "description": "házi kifli, grillezett kolbász, saláta, csalamádé, mustár"}
];

const wrap = [
    {"id": 1, "name": "Olasz wrap", "price": 990, "menuprice": 1560,
        "description": "tortilla tekercs, kevert saláta, grillezett csirkemell, paradicsom szósz, mozzarella"},
    {"id": 2, "name": "Görög wrap", "price": 990, "menuprice": 1560,
        "description": "tortilla tekercs, kevert saláta, grillezett csirkemell, tzatziki, feta sajt"},
    {"id": 3, "name": "Mexikói wrap", "price": 990, "menuprice": 1560,
        "description": "tortilla tekercs, kevert saláta, chilis bab, cheddar, bbq szósz, jalapeno"},
    {"id": 4, "name": "Kentucky wrap", "price": 1180, "menuprice": 1760,
        "description": "tortilla tekercs, kevert saláta, kentucky csirke, cheddar, bbq szósz"}
];

const salad = [
    {"id": 1, "name": "Csirkés cézár", "description": "kevert saláta, grillezett csirkemell, parmezán, cézár öntet", "price": 890},
    {"id": 2, "name": "Tonhal saláta", "description": "kevert saláta, tonhal, lilahagyma, parmezán, olivaolaj", "price": 1090},
    {"id": 3, "name": "Body factory saláta" ,"description":"kevert saláta, édesburgonya, grillezett csirkemell, light cézár öntet, parmezán, Kentucky csirke", "price": 1660}
];

const kentucky = [
    {"id": 1, "name": "kentucky csirke", "price": 990},
    {"id": 2, "name": "kentucky menü", "price": 1660},
    {"id": 3, "name": "kentucky all in", "price": 2060}
];

// price 28, menuprice 32cm
const pizza = [
    {"id": 1, "name": "Margharita", "description": "paradicsomos alap, sajt, paradicsom", "price": 1280, "menuprice": 2121},
    {"id": 2, "name": "Sonkás", "description": "paradicsomos alap, sajt, sonka", "price": 1480, "menuprice": 2000},
    {"id": 3, "name": "Sonka kukorica", "description": "paradicsomos alap, sajt, sonka, kukorica", "price":  1580, "menuprice": 2000},
    {"id": 4, "name": "Sonka gomba", "description": "paradicsomos alap, sajt, sonka, gomba", "price": 1580, "menuprice": 2000},
    {"id": 5, "name": "Sonka gomba kukorica", "description": "paradicsomos alap, sajt, sonka, gomba, kukorica", "price": 1680, "menuprice": 2000},
    {"id": 6, "name": "Szalámis", "description": "paradicsomos alap, sajt, szalámi", "price": 1480, "menuprice": 2000},
    {"id": 7, "name": "Pármai sonkás", "description": "paradicsomos alap, sajt, pármai sonka, mozzarella, parmezán, rukkola", "price": 1680, "menuprice": 2000},
    {"id": 8, "name": "Magyaros", "description": "paradicsomos alap, sajt, szalámi, bacon, lilahagyma, jalapeno, paradicsom", "price": 1680, "menuprice": 2000},
    {"id": 9, "name": "Hawai", "description": "paradicsomos alap, sajt, sonka, ananász", "price": 1580, "menuprice": 2000},
    {"id": 10, "name": "Piedone", "description": "paradicsomos alap, sajt, cheddar, chilis bab, lilahagyma", "price": 1680, "menuprice": 2000},
    {"id": 11, "name": "4 sajtos", "description": "paradicsomos alap, sajt, kéksajt, füstölt sajt, mozzarella", "price": 1580, "menuprice": 2000},
    {"id": 12, "name": "Kentucky csikrés Calzone (töltött pizza)", "description": "paradicsomos alap, sajt, cheddar, kentucky csirke", "price": 1880, "menuprice": 2000}
];

const koret = [
    {"id": 1, "name": "Hasábburognya", "price": 380},
    {"id": 2, "name": "Hagymakarika", "price": 480},
    {"id": 3, "name": "Édesburgonya", "price": 580},
    {"id": 4, "name": "Coles law", "price": 480}
];

const sauce = [
    {"id": 1, "name": "Sárga", "price": 280},
    {"id": 2, "name": "Piros", "price": 280},
    {"id": 3, "name": "BBQ", "price": 280}
];

const drink = [
    {"id": 1, "name": "Coca cola 0.5", "price": 380},
    {"id": 2, "name": "Cola zero 0.5", "price": 380},
    {"id": 3, "name": "Cola zero citrom 0.5", "price": 380},
    {"id": 4, "name": "Cola zero cherry 0.5", "price": 380},
    {"id": 5, "name": "Cola light 0.5", "price": 380},
    {"id": 6, "name": "Fanta narancs 0.5", "price": 380},
    {"id": 7, "name": "Fanta bodza 0.5", "price": 380},
    {"id": 8, "name": "Sprite 0.5", "price": 380},
    {"id": 9, "name": "Sprite zero 0.5", "price": 380},
    {"id": 10, "name": "Kinley Gyömbér 0.5", "price": 380},
    {"id": 11, "name": "Kinley Tonic 0.5", "price": 380},
    {"id": 12, "name": "Fuze tea barack 0,5", "price": 380},
    {"id": 13, "name": "Fuze tea citrom 0.5", "price": 380},
    {"id": 14, "name": "Fuze tea zero citrom", "price": 380},
    {"id": 15, "name": "Fuze tea epres zöld 0.5", "price": 380},
    {"id": 16, "name": "Cappy almás körte 0.5", "price": 380},
    {"id": 17, "name": "Cappy multivitamin 0.5", "price": 380},
    {"id": 18, "name": "Naturaqua mentes 0.5", "price": 200},
    {"id": 19, "name": "Naturaqua savas 0.5", "price": 200},
    {"id": 20, "name": "Coca cola 0.33", "price": 280},
    {"id": 21, "name": "Cola zero vaniliás 0.33", "price": 380},
    {"id": 22, "name": "Miller sör 0.33", "price": 480}
];

const foods = {hambi: hambi, hotdog: hotdog, wrap: wrap, salad: salad, kentucky: kentucky, pizza: pizza, koret: koret, sauce: sauce, drink: drink};

exports.foods = foods;


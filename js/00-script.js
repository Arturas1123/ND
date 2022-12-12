// // 1.1. Sukurti tris kintamuosius su skaičiaus tipo reikšmėmis
// // 	a) Po kiekvieno jų inicijavimo išvesti į console


// let n = 30;
// console.log(n);

// let n1 = 20;
// console.log(n1);

// let n2 = 15;
// console.log(n2);


// // 1.2. Sukurti tris kintamuosius su teksto tipo reikšmėmis (vardas, pavarde, profesija)
// // 	a) Po kiekvieno jų inicijavimo išvesti į console


// let name1 = 'Dave';
// console.log(`${name1} is my friend`);

// let lastName = 'Johnson';
// console.log(`${lastName} is his last name `);

// let occupation = 'Devolopmnent';
// console.log(`And he's great at ${occupation}`);


// // 2.1. Susumuoti visus skaičiaus tipo kintamuosius
// // 	a) Rezultatą išvesti į consolę (išvedimo pvz => 'Skaičių 1, 2 ir 3 suma lygi 6')

// // x = 1;
// // y = 2;
// // z = 3;

// // console.log(x + y + z);

// // 2.2. Sujungti visus teksto tipo kintamuosius taip, kad tarp jų  būtų sudarytas tarpas
// // 	a) rezultatą išvesti į consolę (išvedimo pvz => 'vardenis pavardenis profesija yra programuotojas')

// let name2 = 'Dave';
// let lastName1 = 'Jonhson';
// let occupation1 = 'Devolopment';

// console.log (`${name2} ${lastName1} profession is ${occupation1}`);


// // 3. Kintamųjų inicijavimas ir priskirimas 
// // 	a) inicijuokite kintamąjį, skirta išsugoti vartotojo akių spalvą
// // 	b) inicijuokite du kintamuosius - user ir userName
// // 	c) Priskirkite kinatmajam pavdadinimu userName reikšmę "Jhon"
// // 	d) Priskirkite userName kintamojo reikšmę kintamajam user
// // 	e) išveskite į consolę pasisveikinimą su kintamuoju user(išvedimo pvz => 'Hello, Jhon')

// let eye = 'Eye color';
// console.log(eye)

// let user;
// let userName;
// userName = 'John';
// user = userName;
// let word = 'Hello';
// console.log(`'${word}, ${userName}'`)


// // var user = 'user';
// // var userName = 'userName'; 
// // if (true){
// //     var userName = 'John';
// // }
// // console.log(user, userName)


// // let word = 'Hello'

// // console.log(`'${word}, ${userName}'`)








// 1. Parašykite f-ją, kuri apskaičiuotų trikampio plotą. 
// Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b)
// Funkcija gražina trikampio plotą.

function plotas(a, s){
    return  a * s / 2;
}
console.log(plotas(18, 6));


// 2. Paraykite f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
// sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 

// lessThan100(22, 15) ➞ true
// lessThan100(83, 34) ➞ false
// lessThan100(3, 77) ➞ true

function calc(x, c){
    if(x + c <= 100)
    {
        console.log('true')
    }
    else{
        console.log('false')
    }
}
calc(45, 65)


// 3. Sukurkite f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

let SameNum = 5;
let SameNum1 = 5;
 function isEven(firstSameNum, secondSameNum){
    if (SameNum == SameNum1) {
        console.log('true')
    }
 }
isEven(SameNum, SameNum1)


// 4. Sukurti f-ją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių. Ūkininkas pateikia tris parametrus
// Pirmas parametras vištų skaičius, antras karvių skaičius, trečias paršelių skaičius ūkyje. 
// F-ja gražiną bendrą kojų skaičių
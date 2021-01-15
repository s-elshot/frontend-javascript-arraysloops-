// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// answer: for-i loop is runs for length of "names" and add to each number from names (names[i]) +"tje",, console.log outside loop;
for (let i = 0; i < names.length; i++) {
    names[i]= names[i]+"je";
}
console.log(names);



// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

// answer: for-i loop is runs for length of "numbers" and multiply each number from numbers (numbers[i])* 3, console.log outside loop;
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i]* 3;
}
console.log(numbers);

// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]

// answer: for-i loop is runs for length of "figures" and add +3 to each number from figures (figures[i])* 3 , console.log outside loop;
for (let i = 0; i < figures.length; i++) {
    figures[i] = figures[i] + 3;
}
console.log(figures);


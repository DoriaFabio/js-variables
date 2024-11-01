const mountain = "Monte Bianco"; // NON MODIFICARE QUESTA RIGA
const activities = "Escursionismo, Arrampicata, Sci, Fotografia"; // NON MODIFICARE QUESTA RIGA
const greeting = "Buona giornata"; // NON MODIFICARE QUESTA RIGA
const elevation = "4810"; // NON MODIFICARE QUESTA RIGA
const weather = "nebbioso"; // NON MODIFICARE QUESTA RIGA

// 1. Estrai un carattere specifico
// Estrai il carattere alla posizione 6 nella variabile mountain usando charAt()
const sixthChar = mountain.charAt(6); // Indici partono da 0
console.log(sixthChar);

// 2. Verifica se una stringa contiene una sottostringa
// Verifica se la variabile activities contiene la parola 'Sci' e stampa il risultato (true/false)
const hasSki = activities.includes("Sci");
console.log(hasSki);

// 3. Converti una stringa in numero e fai un calcolo
// Converti la variabile elevation in un numero e aggiungi 10, poi stampa il risultato
const newElevation = parseInt(elevation) + 10;
console.log(newElevation);

// 4. Trasforma tutto in minuscolo
// Trasforma tutto in minuscolo la stringa della variabile greeting
const lowerCaseGreeting = greeting.toLocaleLowerCase();
console.log(lowerCaseGreeting);

// 5. Ripeti una stringa
// Ripeti la stringa weather 3 volte con uno spazio tra le ripetizioni e stampa il risultato
const repeatedWeather = weather.repeat(1) + " " + weather.repeat(1) + " " + weather.repeat(1);
console.log(repeatedWeather);

// 6. Estrai una sottostringa usando substr()
// Estrai 'Bianco' dalla variabile mountain usando substr()
const mountainSubstr = mountain.substring(6);
console.log(mountainSubstr);

// 7. Aggiungi padding a una stringa
// Aggiungi zeri all'inizio della variabile elevation per renderla lunga 6 caratteri
const paddedElevation = elevation.padStart(6, "0");
console.log(paddedElevation);
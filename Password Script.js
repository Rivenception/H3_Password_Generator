var password = [];
var letters = "q w e r t y u i o p a s d f g h j k l z x c v b n m";
var singleLetters = letters.split(" ");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = "! @ # $ % ^ & * ( )";
var singleSymbols = symbols.split(" ");

var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");


// PROMPT ASKING HOW CHARACTERS THE USER WANTS FOR A PASSWORD
var repeats = prompt("How many characters would you like for your password?");
var charRepeats = Math.floor(repeats) + 1;

// THIS FOR LOOP RETURNS A NEW PASSWORD

for (let x = 0; x < charRepeats; x++) {
    genKey()
    var newPassword = password.join("");
}

// CODE FOR RANDOM GENERATION OF EACH CHARACTER
function genKey() {
    var randLNS = Math.floor(Math.random() * 3);

    if (randLNS === 0) {
        var letterRand = Math.floor(Math.random() * 27);
        var isCapital = Math.floor(Math.random() * 2);
        var pwgen = singleLetters[letterRand];
        if (isCapital === 0) {
            pwgen.toUpperCase().charAt(0);
        } else {
            pwgen.toLowerCase();
        }
        password.push(pwgen);
    } else if (randLNS === 1) {
        var numberRand = Math.floor(Math.random() * 10);
        var pwgen = numbers[numberRand];
        password.push(pwgen);
    } else {
        var symbolRand = Math.floor(Math.random() * 10);
        var pwgen = singleSymbols[symbolRand];
        password.push(pwgen);
    }
}

alert("Your new password is " + newPassword)

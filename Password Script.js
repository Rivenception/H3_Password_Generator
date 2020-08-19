var password = [];
var letters = "q w e r t y u i o p a s d f g h j k l z x c v b n m";
var singleLetters = letters.split(" ");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = "! @ # $ % ^ & * ( )";
var singleSymbols = symbols.split(" ");

var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

// NEED REPEATING FUNCTION HERE

var repeats = prompt("How many characters would you like for your password?")
var charRepeats = Math.floor(repeats) + 1


for (let x = 0; x < 8; x++) {
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
    var newPassword = password.join();
}

alert("Your new password is " + newPassword)

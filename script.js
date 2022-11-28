// Kacper Letowski Odd pd 7 8
function init() {
    guess = 50;
    guesses = 5;
    randomNum = parseInt(Math.random() * 100 + 1);
    on = true;

    guessOutput = document.getElementById("guessPlayer");
    guessesOutput = document.getElementById("guessesLeft");
    tableOutput = document.getElementById("log");

    display();
}

function display() {
    guessOutput.innerHTML = guess;
    guessesOutput.innerHTML = guesses;
}

function add(num) {
    if (guess + num <= 100 && on) {
        guess += num;
        display();
    }
}

function remove(num) {
    if (guess - num >= 1 && on) {
        guess -= num;
        display();
    }
}

function reset() {
    guess = 50;
    guesses = 5;
    randomNum = parseInt(Math.random() * 100 + 1);
    on = true;

    tableOutput.innerHTML = "<tr><th>Guess</th><th>Response</th></tr>"

    display();
}

function addRow(guess, response) {
    tableOutput.innerHTML += "<tr><th>" + guess + "</th><th>" + response + "</th></tr>"
}

function commit() {
    if (on){
        let diff = Math.abs(randomNum-guess);
        if (diff == 0) {
            on = false;
            addRow(guess, "Fire! You got it.")
        }
        else if (diff <= 5) {
            addRow(guess, "Very Hot")
        }
        else {
            guesses--;
            if (diff <= 8) {
                addRow(guess, "Hot")
            }
            else if (diff <= 15) {
                addRow(guess, "Very Warm")
            }
            else if (diff <= 20) {
                addRow(guess, "Warm")
            }
            else if (diff <= 30) {
                addRow(guess, "Cool")
            }
            else if (diff <= 40) {
                addRow(guess, "Very Cool")
            }
            else if (diff <= 55) {
                addRow(guess, "Cold")
            }
            else {
                addRow(guess, "Very Cold")
            }
            display();
        }

        if (guesses == 0) {
            on = false;
        }
    }
    
}
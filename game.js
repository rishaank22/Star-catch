let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess === randomNumber) {
        messageElement.textContent = "Congratulations! You guessed it right!";
        messageElement.style.color = "green";
        disableInput();
    } else {
        attempts--;
        if (attempts > 0) {
            messageElement.textContent = userGuess < randomNumber ? "Too low!" : "Too high!";
            messageElement.style.color = "red";
            attemptsElement.textContent = `Attempts left: ${attempts}`;
        } else {
            messageElement.textContent = `Game over! The number was ${randomNumber}.`;
            messageElement.style.color = "red";
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
}

function resetGame() {
    attempts = 5;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
}
//local storage 
let name1 ="josiah"
let name2 ="rishaan"
let name3 ="aakarsh"
let name4 ="darien"



//save inside local storage 
localStorage.setItem("student 1", name1)
localStorage.setItem("student 2", name2)
localStorage.setItem("student 3", name3)
localStorage.setItem("student 4", name4)
let selected_student=localStorage.getItem("student 3");
 console.log(selected_student);w
 localStorage.removeItem("student 1");

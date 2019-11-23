var number = prompt("Guess a number between 0 to 10");

if (number == 5){
    alert("Correct!")
}

else if (number == 4 || number == 6){
    alert("Too Close! Try again")
}

else if (number < 0 || number > 10){
    alert("Number between 0 to 10!")
}

else if (number > 6){
    alert("Too high. Try again")
}

else if (number < 4){
    alert("Too low. Try again")
}

else {
    console.log("Error!")
}
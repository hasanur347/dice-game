
function showMessage(){
    let randomNumber1=Math.floor(Math.random() * 6) + 1;
    let randomImages = "images/dice" + randomNumber1 + ".png";


    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImages2 = "images/dice" + randomNumber2 + ".png"

     // setting the images
    let diceImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages);
    let diceImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("button").innerHTML = "🚩Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("button").innerHTML = "Player 2 Wins!🚩";
    } else {
        document.querySelector("button").innerHTML = "It's a Tie!😑";
    }


    
}


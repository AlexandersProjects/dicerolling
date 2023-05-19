const diceImgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
"images/dice4.png", "images/dice5.png", "images/dice6.png"];

// wait for the DOM to load before changing the images
document.addEventListener("DOMContentLoaded", function() {
    var player1Number = choseRandomIndex(diceImgArray);
    console.log("Player 1 = " + player1Number);
    var player2Number = choseRandomIndex(diceImgArray);
    console.log("Player 2 = " + player2Number);

    changeImageWithIndex("image1", player1Number);
    changeImageWithIndex("image2", player2Number);
    if (player1Number > player2Number) {
        console.log("Player 1 Wins!");
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    } else if (player1Number < player2Number) {
        console.log("Player 2 Wins!");
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    } else {
        console.log("Draw!");
        document.querySelector("h1").textContent = "Draw!";
    }
});

function choseRandomIndex(array) {
    var randomImgIndex = Math.floor(Math.random() * (array.length));
    return randomImgIndex;
}

function changeImage(imageId) {
    const randomImgIndex = choseRandomIndex(diceImgArray);
    const newImage = diceImgArray[randomImgIndex];
    document.getElementById(imageId).src = newImage;
}

function changeImageWithIndex(imageId, index) {
    const newImage = diceImgArray[index];
    document.getElementById(imageId).src = newImage;
}
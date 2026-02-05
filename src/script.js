function generateRandomCard() {
    let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["diamond", "spade", "heart", "club"];
    let icons = { "diamond": "♦", "spade": "♠", "heart": "♥", "club": "♣" };

    let randomCardNumber = cardNumber[Math.floor(Math.random() * cardNumber.length)];
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];

    document.getElementById('cardContent').innerHTML = randomCardNumber;
    document.getElementById('top-suit').innerHTML = icons[randomSuit];
    document.getElementById('bottom-suit').innerHTML = icons[randomSuit];

    
    document.getElementById('theCard').className = "card " + randomSuit;
}


window.onload = function() {
    generateRandomCard(); 

    
    let cardElement = document.getElementById('theCard');
    
    cardElement.addEventListener("click", function() {
        generateRandomCard(); });
};
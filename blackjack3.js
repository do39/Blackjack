// Card Constructor
function Card(suit,number) {
    var s = suit;
    var n = number;
    var value = 0;
    this.getNumber = function() { 
        return n;  
    };
    this.getSuit = function() {  
        return s;
    };
    this.getValue = function() { 
        if(n > 10){ value = 10;
        } else if (n === 1) { value = 11;
        } else { value = n; }
        return value;
    };
}

var deal = function(){
    var newCard = new Card(Math.floor(Math.random() * 4)+1,Math.floor(Math.random() * 13) +1);
    return newCard;
};

var playAsDealer = function() {
        var dealer = new Hand();
        while (dealer.score() < 17) {
            dealer.hitMe();
        }
        return dealer;
    };
    
var playAsUser = function() {
    var hand = new Hand();
    var decision = confirm("Your hand is " + hand.printHand() + ". Hit OK to hit (take another card) or Cancel to stand (remain without adding).");
    while (decision) {
        hand.hitMe();
        decision = confirm("Your hand is " + hand.printHand() + ". Hit OK to hit (take another card) or Cancel to stand (remain without adding).");
    }
    return hand; };

function declareWinner(userHand,dealerHand){
        var player = userHand.score();
        var dealer = dealerHand.score();
        if (player>21){
            if(dealer>21){
                return "You tied!";
            }
            else {
                return "You lose!";
            }
        }
        else if (dealer>21){
            return "You win!";
        }
        else if (player>dealer){
            return "You win!";
        }
        else if (player===dealer){
            return "You tied!";
        }
        else {
            return "You lose!";
        }
    }

function Hand(){
    var card1 = deal();
    var card2 = deal();
    var thisHand = [card1, card2];
    var suits = ["Diamonds","Hearts","Spades","Clubs"];
    var cards = ["A",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
    this.getHand = function() {
        return this.thisHand;
    };

    this.score = function() {
        var total = 0;
        var aces = 0;

        for(i=0;i<thisHand.length;i++){
            if( thisHand[i].getValue() === 11) aces ++;
            total += thisHand[i].getValue();
        }

        while((total > 21) && ( aces > 0) ) {
            total -= 10;
            aces --;
        }

        return total;

    };
    this.printHand = function() {
        var result = "You have a \n\n";
        var andA = "";

        for(i=0;i<thisHand.length;i++){
            if(i > 0) andA = " and a ";
            result += andA + cards[thisHand[i].getNumber() - 1] + " of " + suits[thisHand[i].getSuit() - 1]; 
        }

        result += " for a score of \n\n" + this.score() + "\n";

        return result;
    };
    this.hitMe = function() {
        var newCard = deal();
        thisHand[thisHand.length] = newCard;
    };
    this.helpMe = function() {
        return thisHand;
    };
}

 var playGame = function() {
var player = playAsUser(); 
var dealer = playAsDealer(); 
console.log("You have: " + player.score() + ". Dealer has: " + dealer.score() + " " + declareWinner(player, dealer));
};
//My game play!
var myHand;
myHand = new Hand();

var hit = confirm(myHand.printHand() + "\n Do you want another Card?");

if(hit === true){
    myHand.hitMe();
    console.log(myHand.printHand());
} else {
    console.log(myHand.printHand());
};

playGame();
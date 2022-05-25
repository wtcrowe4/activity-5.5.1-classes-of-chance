class Casino {
    constructor(name, fakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.winnings = 0;
        this.fakeCoin = fakeCoin;

    }
    
    playGame(betAmount) {
        this.timesPlayed += 1;
        if(Math.random() <= 0.5 || this.fakeCoin == true){
            console.log(this.name + ' Wins.');
            this.timesPlayed = 0;
            this.winnings = 0;
        }else{
            console.log('Players wins $' + betAmount * this.timesPlayed + ' from ' + this.name);
            this.winnings += this.timesPlayed * betAmount;
            console.log('Current winnings $' + this.winnings);
        }
    }

    rollDice(sides) {
        console.log(Math.floor(Math.random() * sides) + 1);
    }

   
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
//
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25); 
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(6);
myExtraBonusCasino.rollDice(20);
myExtraBonusCasino.rollDice(100);


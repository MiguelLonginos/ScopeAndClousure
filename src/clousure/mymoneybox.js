// function moneyBox(coins) {
//     let saveCoins=0;
//     saveCoins+= coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+= coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const moneyBoxML=moneyBox();
moneyBoxML(5);
moneyBoxML(5);
moneyBoxML(15);

const moneyBoxAL=moneyBox();
moneyBoxAL(10);
moneyBoxAL(15);
moneyBoxAL(20);
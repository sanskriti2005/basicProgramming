// primeNumber function: tells us whether a number is even or odd.
function primeNumber(num){
    if(num > 1){
        for(let i = 2; i*i <= num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true
    } else {
        return false;
    }
}

// Function evenOdd: Tells us whether a number is even or not

function evenOdd(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

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
console.log(primeNumber(3));
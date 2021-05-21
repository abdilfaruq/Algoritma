for (counter = 1; counter <= 20; counter++) {
    if (isPrime(counter, counter -1)) {
        console.log(counter + " Ganjil");
    }
}

function isPrime(number, step) {
    if(step <=1)
        return true;
    if(number % step === 0) {
        return false;
    }
    return isPrime(number, step-1);
}
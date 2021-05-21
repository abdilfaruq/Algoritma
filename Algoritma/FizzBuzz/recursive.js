const fizzBuzz = (randomNum) => {
    let counter = 1;
    const func = (counter) => {
       if (counter > randomNum) return;
       if (counter % 5 === 0 && counter  % 3 === 0) console.log('FizzBuzz');
       else if (counter % 5 === 0) console.log('Buzz');
       else if (counter  % 3 === 0) console.log('Fizz');
       else console.log(counter);
 
       func(counter + 1);
    };
    func(counter);
}

fizzBuzz(50)
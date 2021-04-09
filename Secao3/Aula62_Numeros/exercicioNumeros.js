function divisao(n) {
  if (typeof n !== 'number') return n;
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
  
  // if ((x % 3) === 0) {
  // console.log('Fizz');
  // } else if ((x % 5) === 0) {
  //   return console.log('Buzz');
  // } else if  {
  //   return console.log('FizzBuzz');
  // } else {
  //   return console.log(x);
  // }
    
}

for (let i = 0; i <= 100; i++)  {
  console.log(i, divisao(i));
}


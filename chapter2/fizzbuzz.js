console.log('FizzBuzz ver.1:');
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

console.log('FizzBuzz ver.2:');
for (let i = 1; i <= 100; i++) {
    let value = '';
    if (i % 3 === 0) {
        value += 'Fizz';
    }
    if (i % 5 === 0) {
        value += 'Buzz';
    }
    console.log(value.length > 0 ? value : i);
}

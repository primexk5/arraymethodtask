

let numbers = [ 20, 60, 40, 80, 45, 70,30];

function numbersSum (numbers) {
    return numbers.reduce((n, number) => n + number);
}

console.log(numbersSum(numbers));
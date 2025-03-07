
let numbers = [23, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function findEvenNumbers(numbers) {
    return numbers.find((number) => number % 2 === 0);
}

console.log(findEvenNumbers(numbers));
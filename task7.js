
let numbers = [ 20, 60, 40, 80, 45, 70,30];

function numbersDoubles (numbers) {

    for( i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
    return numbers;
}

console.log(numbersDoubles(numbers));
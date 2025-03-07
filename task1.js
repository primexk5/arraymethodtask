

let arry = [];

let input1 = 10;
let input2 = 11;
let input3 = 4;


function addNumber(input1, input2, input3 ) {
    arry.push(input1, input2, input3);
    return arry;

}

console.log(addNumber(input1, input2, input3));

function removeNumber() {
    arry.pop(input3);
    return arry;
}


console.log(removeNumber(input3));
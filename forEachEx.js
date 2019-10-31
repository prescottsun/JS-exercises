function positiveNumber(array) {
    let arrPos = []
    array.forEach(function(number) {
        if (number > 0) {
            arrPos.push(number);
        }
    });
    return arrPos;
}

function evenNumber(array) {
    let arrEven = []

    array.forEach(function(number) {
        if (number % 2 === 0) {
        arrEven.push(number);
        }
    });
    return arrEven;
}

function squareTheNumbers(array) {
    let arrSquared = [];

    array.forEach(function(number) {
        arrSquared.push(Math.pow(number, 2))
    });
    return arrSquared;
}


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -5, -10]

console.log(positiveNumber(arr1))
console.log(evenNumber(arr1))
console.log(squareTheNumbers(arr1))
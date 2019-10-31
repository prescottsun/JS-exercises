function printSquare(size){
    let square = '';
    for (var i = 1; i <= size; i ++){
        for (var j = 1; j <= size; j ++){
            square += '*'
        }
        square += '\n'
    }
    return square;
}

console.log(printSquare(5))
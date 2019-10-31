function printBox(width, height) {
    let box = '';
    for (let i = 1; i <= height; i++){
        for (let j = 1; j <= width; j++){
            if (i == 1 || i == height) {
                box += '*';
            } else if (j == 1 || j == width) {
                box += '*';
            } else {
                box += ' ';
            }
        }
        box += '\n';
    }
    return box;
}

console.log(printBox(6, 4))
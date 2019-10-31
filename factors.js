function factors(number) {
    count = 1
    result = []
    while (count <= number) {
        if (number % count == 0) {
            result.push(count)
        }
        count++
    }
    return result
}

console.log(factors(27))


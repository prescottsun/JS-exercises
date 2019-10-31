function printBanner(text) {
    banner = []
    let count = 1;
    while (count <= 3) {
        if (count == 2) {
            banner.push('* ' + text + ' *')
        }
        else {
            banner.push('*'.repeat(text.length+4))
        }
        count ++;
    }
    banner.forEach(function(element) {
        console.log(element);
    })
}
(printBanner('Welcome to DigitalCrafts'))

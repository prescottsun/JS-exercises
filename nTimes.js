
function call3Times(fun) {
    fun();
    fun();
    fun();
}
printHelloWorld = function{
    console.log('Hello World')
}
call3Times(printHelloWorld)
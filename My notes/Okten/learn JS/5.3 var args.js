function calc() {
    console.log(arguments)
    if (arguments.length === 2 ) {
        return arguments[0] + arguments[1]
    } else if (arguments === 3) {
        return arguments[0] + arguments[1] + arguments[2]
    }
}

calc(30 + 20)
calc(30 + 20 + 50)

function calculator(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "*") {
        return num1 * num2;
    }
    else if (operation === "/") {
        return num1 / num2;
    }
}

console.log(calculator(28, 14, '+'));
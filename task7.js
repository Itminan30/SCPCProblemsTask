function romanToInteger(romanNumeral) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbolValue = romanNumerals[romanNumeral[i]];
        const nextSymbolValue = romanNumerals[romanNumeral[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            result = result + nextSymbolValue - currentSymbolValue;
            i++;
        } else {
            result = result + currentSymbolValue;
        }
    }

    return result;
}

console.log(romanToInteger("XIX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("IX"));
function passwordGenerator(len) {
    const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
    const nums = "0123456789";
    const chars = "!@#$%^&*";

    const mixedChars = upperAlpha + lowerAlpha + nums + chars;

    let password = "";
    if (len >= 4) {
        password = password + upperAlpha.charAt(Math.floor(Math.random() * (upperAlpha.length)));
        password = password + lowerAlpha.charAt(Math.floor(Math.random() * (lowerAlpha.length)));
        password = password + nums.charAt(Math.floor(Math.random() * (nums.length)));
        password = password + chars.charAt(Math.floor(Math.random() * (chars.length)));
        for (i = 4; i < len; i++) {
            password = password + mixedChars.charAt(Math.floor(Math.random() * (mixedChars.length)))
        }
        return password;
    }
    else {
        for (i = 0; i < len; i++) {
            password = password + mixedChars.charAt(Math.floor(Math.random() * (mixedChars.length)))
        }
        return password;
    }
}

console.log(passwordGenerator(8));
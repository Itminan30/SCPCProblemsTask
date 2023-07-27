function stringReverse(str) {
    const strLen = str.length;
    let revStr = "";
    for(i = strLen -1; i >= 0; i--){
        revStr = revStr.concat(str.charAt(i));
    }
    return revStr;
}
console.log(stringReverse("hello world"));
function mostFreq(arr) {
    let max = 0;
    let maxNum = 0;
    for (i = 0; i < arr.length; i++) {
        let numcnt = 0;
        for (j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                numcnt++;
            }
        }
        if(numcnt > max){
            max = numcnt;
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

mostFreq([3, 5, 2, 5, 3, 3, 1, 4, 5]);
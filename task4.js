function findIndices(arr, target) {
    for(i = 0; i < arr.length; i++){
        for(j = i; j < arr.length; j++){
            if(arr[j] >= target){
                break;
            }
            if(arr[i] + arr[j] === target){
                return [i, j]
            }
        }
    }

    return [0, 0];
}


console.log(findIndices([1, 3, 6, 8, 11, 15], 9));

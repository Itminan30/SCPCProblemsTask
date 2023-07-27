function secondSmallest(arr){
    arr = arr.sort((pre, next) => {
        return pre-next;
    });
    return arr[1];
}

console.log(secondSmallest([1, 34, 12, 65, 44, 87, 12, 13, 65, 6]));
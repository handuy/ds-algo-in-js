function countUniqueValues(inputArr){
    if (inputArr.length === 0) {
        return 0;
    }

    if (inputArr.length === 1) {
        return 1;
    }

    let i;
    let lastNumber;
    let count = 0;

    for (i = 0; i < inputArr.length-1; i++) {
        if ( inputArr[i] != inputArr[i+1] ) {
            if ( inputArr[i] != lastNumber ) {
                count = count + 2
            } else {
                count = count + 1
            }
            lastNumber = inputArr[i+1]
        }
    }

    return count
}

console.log( countUniqueValues([0,1,2]) )

console.log( countUniqueValues([1,2,3]) )

console.log( countUniqueValues([-2,-1,-1,0,1]) )

console.log( countUniqueValues([-2,-2,-1,0,1]) )

console.log( countUniqueValues([-2,-2,-1,-1,1]) )

console.log( countUniqueValues([3,2,1]) )
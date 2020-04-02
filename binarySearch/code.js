function binarySearch(sortedArr, num){
    let firstPointer = 0
    let finalPointer = sortedArr.length-1

    let median;

    console.log("firstPointer", firstPointer)
    console.log("finalPointer", finalPointer)

    while( firstPointer < finalPointer ) {
        median = Math.round( (firstPointer + finalPointer)/2 )
        console.log("median", median)

        if ( num == sortedArr[median] ) {
            return median
        } else if ( num > sortedArr[median] ) {
            firstPointer = median + 1

            console.log("firstPointer1", firstPointer)
            console.log("finalPointer1", finalPointer)
        } else {
            finalPointer = median - 1

            console.log("firstPointer2", firstPointer)
            console.log("finalPointer2", finalPointer)
        }


    }

    if (sortedArr[finalPointer] == num){
        return finalPointer
    }
    return -1
}

console.log( binarySearch([1,2,3,4,5],566) )
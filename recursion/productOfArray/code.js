function productOfArray(inputArr){
    if (inputArr.length == 1) {
        return inputArr[0]
    }

    let firstNumber = inputArr[0]

    inputArr = inputArr.slice(1)

    return firstNumber * productOfArray( inputArr )
}
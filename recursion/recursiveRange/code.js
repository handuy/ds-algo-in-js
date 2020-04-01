function recursiveRange(input){
    if (input == 0) {
        return 0
    }
   
    return input + recursiveRange(input - 1)
}

// console.log( recursiveRange(6) )
function areThereDuplicates() {
    let obj = {}
    for (let i=0; i < arguments.length; i++) {
        obj[ arguments[i] ] = ( obj[ arguments[i] ] || 0 ) + 1
    }

    let result = false

    for (let inputArg in obj) {
        if ( obj[inputArg] != 1 ) {
            result = true
        }
    }

    return result
}
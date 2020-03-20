function sameFrequency(number1, number2) {
    let str1 = number1.toString()
    let str2 = number2.toString()

    if (str1.length != str2.length) {
        return false
    }

    let obj1 = {}
    let obj2 = {}

    // Độ phức tạp thuật toán: 0(n)
    // Đếm xem mỗi chữ số xuất hiện bao nhiêu lần trong số
    for (let i = 0; i < str1.length; i++) {
        obj1[ str1[i] ] = ( obj1[ str1[i] ] || 0 ) + 1
    }

    // Độ phức tạp thuật toán: 0(n)
    // Đếm xem mỗi chữ số xuất hiện bao nhiêu lần trong số
    for (let j = 0; j < str2.length; j++) {
        obj2[ str2[j] ] = ( obj2[ str2[j] ] || 0 ) + 1
    }

    for (let digit in obj1) {
        // obj1 có chữ số trong khi obj2 không có --> next !!!
        if ( !(digit in obj2) ) {
            return false
        }

        // obj1 và obj2 đều có chữ số cơ mà tần suất xuất hiện khác nhau --> next!!!
        if ( obj1[digit] != obj2[digit] ) {
            return false
        }
    }

    return true
}
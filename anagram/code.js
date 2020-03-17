function validAnagram(string1, string2) {
    // độ dài đã không bằng nhau thì next luôn
    if (string1.length != string2.length) {
        return false
    }

    // Mỗi object lưu các cặp key-value: key là mỗi chữ cái, value là số lần xuất hiện trong chuỗi
    let obj1 = {}
    let obj2 = {}

    // Độ phức tạp thuật toán: 0(n)
    // Đếm xem mỗi chữ cái xuất hiện bao nhiêu lần trong chuỗi
    for (let i = 0; i < string1.length; i++) {
        obj1[ string1[i] ] = ( obj1[ string1[i] ] || 0 ) + 1
    }

    // Độ phức tạp thuật toán: 0(n)
    // Đếm xem mỗi chữ cái xuất hiện bao nhiêu lần trong chuỗi
    for (let j = 0; j < string2.length; j++) {
        obj2[ string2[j] ] = ( obj2[ string2[j] ] || 0 ) + 1
    }

    for (let character in obj1) {
        // obj1 có chữ cái trong khi obj2 không có --> next !!!
        if ( !(character in obj2) ) {
            return false
        }

        // obj1 và obj2 đều có chữ cái cơ mà tần suất xuất hiện khác nhau --> next!!!
        if ( obj1[character] != obj2[character] ) {
            return false
        }
    }

    return true
}
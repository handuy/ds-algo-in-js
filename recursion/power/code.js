function power(base, exponent){
    if (exponent == 0) {
        return 1
    }

    if (exponent == 1) {
        return base
    }

    exponent--
    return base * power(base, exponent)
}

// power(2,4)
// Lần chạy 1: 4 != 0 và 4 != 1 --> exp = 4 - 1 = 3, return 2 * power(2,3) --> phải đợi power(2,3) return
// Lần chạy 2: 3 != 0 và 3 != 1 --> exp = 3 - 1 = 2, return power(2,3) = 2 * power(2,2) --> phải đợi power(2,2) return
// Lần chạy 3: 2 != 0 và 2 != 1 --> exp = 2 - 1 = 1, return power(2,2) = 2 * power(2,1) --> phải đợi power(2,1) return
// Lần chạy 4: 1 == 1 --> power(2,1) được return với kết quả là 2 --> Gỡ power(2,1) ra khỏi stack
// power(2,1) được return --> đến lượt power(2,2) được return --> đến lượt power(2,3) được return --> stack được empty
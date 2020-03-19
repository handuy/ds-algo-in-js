## Bài toán
Viết 1 hàm nhận input là một array đã được sắp xếp. Đếm xem có bao nhiêu unique values trong mảng

## Giải quyết bài toán:
Ý tưởng về cơ bản là như sau:
- Tạo 2 biến: 1 biến i lưu index của array (bắt đầu = 0), 1 biến lastNumber lưu giá trị của mảng tại vị trí index + 1
- Tạo thêm 1 biến lưu số lượng unique values, tạm gọi là count
- Lần lượt so sánh 2 phần tử liền kề
- Nếu 2 phần tử bằng nhau --> mặc kệ không làm gì cả :v
- Nếu 2 phần tử khác nhau --> mời đọc phần kế tiếp :v

## 2 phần tử khác nhau thì sao ?
1. Nếu phần tử đứng trước ( array[i] ) == lastNumber
Chứng tỏ array[i] đã được đếm ở lần trước đó rồi --> ở lần so sánh này chỉ có thêm 1 unique values --> count = count + 1

2. Nếu phần tử đứng trước ( array[i] ) != lastNumber
Chứng tỏ array[i] chưa được đếm ở lần trước đó --> ở lần so sánh này có thêm 2 unique values --> count = count + 2

Sau khi check trường hợp xong thì phải cập nhật lại lastNumber = array[i]

Ví dụ với mảng [0,1,2]:
- Ban đầu lastNumber = 0
- Bắt đầu so sánh 2 phần tử đầu tiên: 0 != 1, 0 == lastNumber --> chỉ có 1 unique value ở lần so sánh này, đồng thời cập nhật lastNumber = 0 --> count = 1
- Lần so sánh 2: 1 != 2; 1 != lastNUmber (0) --> chứng tỏ số 1 chưa được tính là unique value ở lần so sánh trước --> có thêm 2 unique value ở lần so sánh này --> count = 1 + 2 = 3, cập nhật lastNumber = 1

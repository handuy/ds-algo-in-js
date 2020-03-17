Bài toán:

Viết 1 hàm nhận input là 2 chuỗi a và b: Kiểm tra xem b có phải là anagram sinh ra từ a hay ko
Chuỗi b là anagram của chuỗi a khi và chỉ khi thoả mãn cả 2 điều kiện:
- Mỗi một chữ cái trong chuỗi a đều tồn tại trong chuỗi b
- Với mỗi chữ cái trong chuỗi a và b, số lần xuất hiện ở 2 chuỗi phải bằng nhau

Ví dụ:
- a = car, b = rac --> true
- a = car, b = carrr --> false
- a = car, b = aac --> false
- a = race, b = care --> true

Giải quyết bài toán:

1. Kiểm tra độ dài 2 chuỗi: Nếu độ dài 2 chuỗi mà khác nhau thì return false luôn
Một khi 2 chuỗi đã có length bằng nhau thì sang bước 2

2. Tạo 2 object tương ứng với 2 chuỗi. Mỗi object sẽ lưu các cặp key-value, trong đó:
- key: chữ cái trong chuỗi
- value: số lần xuất hiện của chữ cái đó trong chuỗi

3. Chạy vòng lặp qua từng chữ cái của mỗi chuỗi, mỗi lần chạy sẽ cập nhật key-value của object tương ứng

4. Chạy vòng lặp qua từng key của object 1, với mỗi key của object 1 ta tiến hành kiểm tra trong object 2:
- Nếu key đó không tồn tại trong object 2 --> return false
- Nếu key đó tồn tại trong object 2 nhưng value lại khác --> return false
Chạy hết vòng lặp mà không bị return false thì tức là return true
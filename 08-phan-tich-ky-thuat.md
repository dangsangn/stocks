# Module 7 — Phân tích kỹ thuật

Phân tích cơ bản trả lời **mua gì**; phân tích kỹ thuật giúp trả lời **mua khi nào và bán khi nào**. Phân tích kỹ thuật dựa trên giả định rằng giá và khối lượng phản ánh hành vi của đám đông, và hành vi đó có xu hướng lặp lại. Đây là công cụ **xác suất**, không phải quả cầu tiên tri. Dùng nó để quản lý điểm vào, điểm ra và cắt lỗ, đừng dùng làm lý do duy nhất để mua.

## 7.1. Đọc biểu đồ nến Nhật

Mỗi cây nến thể hiện 4 mức giá trong một khoảng thời gian (ngày, tuần, tháng):

```
      │   ← giá cao nhất (râu trên)
    ┌─┴─┐
    │   │ ← thân nến: từ giá mở cửa đến giá đóng cửa
    │   │   nến xanh: đóng cửa > mở cửa (tăng)
    └─┬─┘   nến đỏ:  đóng cửa < mở cửa (giảm)
      │   ← giá thấp nhất (râu dưới)
```

- **Thân dài:** một bên (mua hoặc bán) áp đảo
- **Râu dưới dài:** giá bị bán xuống sâu nhưng có lực mua kéo lên, có thể là tín hiệu đáy
- **Râu trên dài:** giá được đẩy lên nhưng bị bán xuống, có thể là tín hiệu đỉnh
- **Nến doji (thân rất nhỏ):** hai bên cân bằng, thị trường lưỡng lự

**Khung thời gian:** nhà đầu tư trung, dài hạn nên xem biểu đồ **tuần** để thấy xu hướng lớn, biểu đồ ngày để chọn điểm vào. Biểu đồ phút và giờ chỉ dành cho người giao dịch trong ngày, không phù hợp với người mới.

## 7.2. Xu hướng: nền tảng của mọi thứ

| Xu hướng | Nhận diện | Hành động |
|---|---|---|
| Tăng | Đỉnh sau cao hơn đỉnh trước, đáy sau cao hơn đáy trước | Ưu tiên mua khi giá điều chỉnh về hỗ trợ |
| Giảm | Đỉnh sau thấp hơn đỉnh trước, đáy sau thấp hơn đáy trước | Không bắt đáy; đứng ngoài hoặc giảm tỷ trọng |
| Đi ngang | Giá dao động trong một vùng | Chờ giá thoát khỏi vùng (breakout) |

Câu nói nổi tiếng nhất của trường phái này: **"Xu hướng là bạn"** (the trend is your friend). Người mới mất tiền nhiều nhất vì **bắt dao rơi**, tức mua một cổ phiếu đang trong xu hướng giảm chỉ vì "đã giảm nhiều rồi, chắc rẻ".

## 7.3. Hỗ trợ và kháng cự

- **Hỗ trợ:** vùng giá mà lực mua từng xuất hiện mạnh, giá khó giảm xuống dưới
- **Kháng cự:** vùng giá mà lực bán từng xuất hiện mạnh, giá khó vượt lên trên
- **Đổi vai:** kháng cự bị phá vỡ thường trở thành hỗ trợ mới, và ngược lại
- **Các mốc tâm lý:** số tròn (VN-Index 1.000, 1.200, 1.300 điểm), đỉnh và đáy cũ, vùng giá có khối lượng giao dịch lớn

Hỗ trợ và kháng cự là **vùng**, không phải một con số chính xác. Vẽ chúng trên biểu đồ tuần sẽ tin cậy hơn biểu đồ ngày.

## 7.4. Khối lượng giao dịch

Khối lượng xác nhận độ tin cậy của biến động giá:

| Giá | Khối lượng | Ý nghĩa |
|---|---|---|
| Tăng | Tăng | Xu hướng tăng khỏe, dòng tiền thật đang vào |
| Tăng | Giảm | Đà tăng yếu, có thể sắp điều chỉnh |
| Giảm | Tăng | Áp lực bán mạnh, cẩn trọng |
| Giảm | Giảm | Áp lực bán cạn dần, có thể sắp tạo đáy |

**Breakout chuẩn:** giá vượt kháng cự với khối lượng lớn hơn 1,5–2 lần khối lượng trung bình 20 phiên. Breakout với khối lượng thấp dễ là breakout giả (bull trap).

## 7.5. Các chỉ báo phổ biến

| Chỉ báo | Tham số thường dùng | Cách đọc cơ bản | Điểm yếu |
|---|---|---|---|
| Đường trung bình động MA / EMA | 20 (ngắn hạn), 50 (trung hạn), 200 (dài hạn) | Giá trên MA200 là xu hướng dài hạn tăng. MA50 cắt lên MA200 ("golden cross") là tín hiệu tích cực, cắt xuống ("death cross") là tiêu cực | Luôn trễ so với giá |
| RSI | 14 phiên | Trên 70 là quá mua, dưới 30 là quá bán. Phân kỳ (giá tạo đỉnh mới nhưng RSI không) là dấu hiệu xu hướng yếu | Trong xu hướng mạnh, RSI có thể ở vùng quá mua rất lâu |
| MACD | 12, 26, 9 | Đường MACD cắt lên đường tín hiệu là tích cực; histogram cho biết động lượng | Nhiều tín hiệu nhiễu khi thị trường đi ngang |
| Bollinger Bands | MA20, ±2 độ lệch chuẩn | Dải co hẹp báo hiệu sắp có biến động mạnh. Giá chạm dải trên hay dưới cho biết giá đang ở mức cực đoan tương đối | Không cho biết hướng đi |

**Nguyên tắc:** dùng 2–3 chỉ báo bổ trợ nhau (một chỉ báo xu hướng như MA, một chỉ báo động lượng như RSI hoặc MACD, cộng khối lượng). Mười chỉ báo trên một biểu đồ chỉ gây rối.

## 7.6. Các mô hình giá cơ bản

| Mô hình | Ý nghĩa | Cách xác nhận |
|---|---|---|
| Nền tích lũy (đi ngang dài, biên độ hẹp) | Cổ phiếu đang được gom, chuẩn bị cho một con sóng | Breakout khỏi nền với khối lượng lớn |
| Cốc tay cầm (cup with handle) | Mô hình tiếp diễn xu hướng tăng (theo William O'Neil) | Vượt đỉnh tay cầm với khối lượng lớn |
| Vai – đầu – vai | Mô hình đảo chiều từ tăng sang giảm | Giá phá xuống đường viền cổ |
| Hai đáy (chữ W) / hai đỉnh (chữ M) | Đảo chiều | Vượt qua đỉnh giữa (W) hoặc phá xuống đáy giữa (M) |

## 7.7. Một hệ thống đơn giản kết hợp cơ bản và kỹ thuật

Ví dụ một bộ quy tắc rõ ràng cho người mới. Đây là để minh họa, bạn cần tự kiểm chứng trước khi dùng:

1. **Lọc cơ bản:** chỉ xem các cổ phiếu đạt checklist ở Module 5.
2. **Lọc xu hướng:** giá nằm trên MA200 và MA50 đang đi lên.
3. **Điểm vào:** giá điều chỉnh về gần MA50 hoặc vùng hỗ trợ, khối lượng giảm khi điều chỉnh, rồi có phiên tăng trở lại với khối lượng tăng. Hoặc breakout khỏi nền tích lũy với khối lượng lớn.
4. **Cắt lỗ:** đặt ngay khi mua, dưới vùng hỗ trợ gần nhất, thường là −7% đến −8% (theo O'Neil).
5. **Chốt lời hoặc giảm tỷ trọng:** khi giá đóng cửa dưới MA50 với khối lượng lớn, hoặc luận điểm cơ bản thay đổi.

## 7.8. Sai lầm thường gặp

- Tìm tín hiệu để **xác nhận** quyết định đã có sẵn trong đầu (thiên kiến xác nhận)
- Đổi khung thời gian liên tục cho đến khi thấy tín hiệu mình muốn
- Tin vào các "mô hình chắc chắn" trên mạng xã hội
- Bỏ qua cắt lỗ vì "biểu đồ vẫn đẹp"
- Giao dịch quá nhiều: chi phí giao dịch ăn mòn lợi nhuận (xem Module 2, mục 2.5)

## Bài tập Module 7

- [ ] Mở TradingView, thêm MA20/50/200, RSI 14, khối lượng vào biểu đồ VN-Index khung tuần
- [ ] Đánh dấu xu hướng, hỗ trợ và kháng cự của VN-Index giai đoạn 2021–nay
- [ ] Chọn 5 cổ phiếu, xác định mỗi mã đang ở xu hướng tăng, giảm hay đi ngang và giải thích
- [ ] Tìm 3 ví dụ breakout thật và 3 ví dụ breakout giả trong quá khứ. Khối lượng khác nhau thế nào?
- [ ] Ghi "giao dịch giấy" (không dùng tiền thật) trong 2 tháng theo hệ thống ở mục 7.7, ghi chép mọi lệnh vào nhật ký

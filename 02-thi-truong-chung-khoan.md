# Module 2 — Thị trường chứng khoán vận hành ra sao

Mua cổ phiếu là mua một phần quyền sở hữu doanh nghiệp. Về dài hạn, giá cổ phiếu đi theo lợi nhuận của doanh nghiệp; về ngắn hạn, giá đi theo cung cầu và tâm lý. Benjamin Graham tóm gọn điều này: ngắn hạn thị trường là cái máy bỏ phiếu, dài hạn nó là cái cân.

## 2.1. Các sản phẩm trên thị trường

| Sản phẩm | Bản chất | Rủi ro | Người mới nên dùng? |
|---|---|---|---|
| Chứng chỉ quỹ mở, ETF (ví dụ quỹ mô phỏng VN30) | Mua cả một rổ cổ phiếu, có người quản lý | Trung bình, đã đa dạng hóa | Có, nên bắt đầu từ đây |
| Cổ phiếu riêng lẻ | Một phần sở hữu của một công ty | Trung bình đến cao | Có, sau khi học Module 3–5 |
| Trái phiếu doanh nghiệp | Cho doanh nghiệp vay, nhận lãi cố định | Tùy nhà phát hành; có thể mất vốn nếu doanh nghiệp vỡ nợ | Thận trọng, chỉ chọn nhà phát hành uy tín |
| Chứng quyền có bảo đảm (CW) | Quyền mua cổ phiếu ở giá xác định, có thời hạn | Cao, có thể về 0 khi đáo hạn | Chưa |
| Phái sinh (hợp đồng tương lai VN30) | Đặt cược chỉ số lên hay xuống, có đòn bẩy | Rất cao | Không |

## 2.2. Các sàn và chỉ số ở Việt Nam

| Sàn | Đặc điểm | Biên độ giá trong ngày | Bước giá |
|---|---|---|---|
| HOSE (TP.HCM) | Doanh nghiệp lớn nhất; chỉ số VN-Index, VN30 | ±7% | 10 đ (giá dưới 10.000), 50 đ (10.000–49.950), 100 đ (từ 50.000) |
| HNX (Hà Nội) | Doanh nghiệp vừa; chỉ số HNX-Index | ±10% | 100 đ |
| UPCoM | Doanh nghiệp chưa niêm yết chính thức, mức minh bạch thấp hơn | ±15% | 100 đ |

Ngày giao dịch đầu tiên của mã mới niêm yết có biên độ rộng hơn (20% ở HOSE, 30% ở HNX, 40% ở UPCoM). Một lô chẵn là 100 cổ phiếu. Lô lẻ (1–99 cổ phiếu) khớp trên bảng riêng, thường thanh khoản kém và giá kém hơn.

**Giá tham chiếu** trên HOSE là giá đóng cửa phiên trước. Ví dụ VNM đóng cửa hôm qua ở 60.000 đ thì hôm nay giá trần là 64.200 đ (+7%) và giá sàn là 55.800 đ (−7%), làm tròn theo bước giá.

## 2.3. Phiên giao dịch và các loại lệnh trên HOSE

| Giờ | Phiên | Lệnh dùng được |
|---|---|---|
| 9:00–9:15 | Khớp lệnh định kỳ mở cửa (ATO) | LO, ATO |
| 9:15–11:30 | Khớp lệnh liên tục buổi sáng | LO, lệnh thị trường (MTL, MOK, MAK) |
| 11:30–13:00 | Nghỉ trưa | — |
| 13:00–14:30 | Khớp lệnh liên tục buổi chiều | LO, lệnh thị trường |
| 14:30–14:45 | Khớp lệnh định kỳ đóng cửa (ATC) | LO, ATC |
| 14:45–15:00 | Thỏa thuận sau giờ | Giao dịch thỏa thuận |

HNX và UPCoM có lịch hơi khác: HNX không có phiên ATO, còn UPCoM khớp liên tục đến 15:00. Từ 05/05/2025, các sở chuyển sang hệ thống giao dịch KRX và một số quy định đã thay đổi ([DNSE: những thay đổi của hệ thống KRX](https://hdsd.dnse.com.vn/master/nhung-thay-doi-quan-trong-cua-he-thong-krx)). Kiểm tra lại lịch trên app công ty chứng khoán của bạn.

Các loại lệnh người mới cần biết:

- **LO (lệnh giới hạn):** mua với giá tối đa hoặc bán với giá tối thiểu do bạn đặt. Dùng lệnh này 95% thời gian vì bạn kiểm soát được giá.
- **ATO/ATC:** mua hoặc bán bằng mọi giá tại giá mở cửa hoặc đóng cửa, được ưu tiên khớp trước lệnh LO.
- **Lệnh thị trường (MTL, MOK, MAK):** khớp ngay với giá tốt nhất đang có. Nhanh, nhưng có thể khớp giá xấu khi thanh khoản mỏng.

## 2.4. Chu kỳ thanh toán T+2

Mua vào ngày T (ví dụ thứ Hai) thì cổ phiếu về tài khoản chiều T+2 (thứ Tư), và bạn bán được từ lúc đó. Bán vào ngày T thì tiền về ngày T+2; muốn dùng sớm hơn có thể ứng trước tiền bán, chịu phí. Vì vậy bạn không thể "mua sáng bán chiều" như ở một số thị trường khác.

## 2.5. Chi phí giao dịch: ví dụ bằng số

Giả sử phí môi giới 0,15% mỗi chiều và thuế 0,1% trên giá trị bán:

| Bước | Phép tính | Số tiền (đ) |
|---|---|---|
| Mua 100 cổ phiếu giá 60.000 | 100 × 60.000 | 6.000.000 |
| Phí mua | 0,15% × 6.000.000 | 9.000 |
| Bán 100 cổ phiếu giá 66.000 | 100 × 66.000 | 6.600.000 |
| Phí bán | 0,15% × 6.600.000 | 9.900 |
| Thuế thu nhập cá nhân khi bán | 0,1% × 6.600.000 | 6.600 |
| **Lãi ròng** | 600.000 − 9.000 − 9.900 − 6.600 | **574.500** |

Mỗi vòng mua bán tốn khoảng 0,4% giá trị. Giao dịch 50 vòng một năm thì riêng phí và thuế đã ăn khoảng 20% vốn. Đây là lý do lướt sóng liên tục rất khó có lãi.

## 2.6. Sự kiện doanh nghiệp và cách điều chỉnh giá

Vào **ngày giao dịch không hưởng quyền (GDKHQ)**, giá tham chiếu được điều chỉnh giảm. Người mới hay tưởng cổ phiếu "sập", thực ra tổng tài sản của họ không đổi. Muốn nhận quyền, bạn phải mua trước ngày GDKHQ (và giữ đến hết ngày liền trước đó).

| Sự kiện | Ví dụ | Giá tham chiếu sau điều chỉnh |
|---|---|---|
| Cổ tức tiền mặt | 2.000 đ/cổ phiếu, giá 60.000 | 60.000 − 2.000 = 58.000. Bạn nhận 2.000 đ, trừ thuế 5% |
| Cổ tức bằng cổ phiếu, cổ phiếu thưởng | Tỷ lệ 20%, giá 60.000 | 60.000 / 1,2 = 50.000. 100 cổ phiếu thành 120 |
| Phát hành quyền mua | Tỷ lệ 5:1, giá phát hành 10.000, giá thị trường 60.000 | (60.000 + 10.000 × 0,2) / 1,2 ≈ 51.667 |

Các sự kiện khác cần theo dõi:

- Đại hội đồng cổ đông thường niên, thường vào tháng 3–5, nơi công bố kế hoạch kinh doanh năm
- Công bố báo cáo tài chính quý (hạn 20 ngày sau khi kết thúc quý với báo cáo riêng, 30 ngày với báo cáo hợp nhất)
- Giao dịch của cổ đông nội bộ và việc mua cổ phiếu quỹ

## 2.7. Những bên tham gia thị trường

- **Ủy ban Chứng khoán Nhà nước (UBCKNN):** cơ quan quản lý, xử phạt vi phạm
- **Sở giao dịch (HOSE, HNX):** nơi khớp lệnh
- **VSDC:** lưu ký cổ phiếu, thanh toán bù trừ
- **Công ty chứng khoán:** nơi bạn mở tài khoản, đặt lệnh, vay margin
- **Nhà đầu tư nước ngoài, tổ chức trong nước và cá nhân:** ở Việt Nam, nhà đầu tư cá nhân chiếm phần lớn giá trị giao dịch, nên thị trường biến động mạnh và dễ bị tâm lý đám đông chi phối

## Bài tập Module 2

- [ ] Mở tài khoản tại một công ty chứng khoán; so sánh phí giao dịch và lãi margin của 3 công ty
- [ ] Xem bảng giá trong 5 phiên liên tiếp và giải thích được các cột: tham chiếu, trần, sàn, dư mua, dư bán, khớp lệnh, khối ngoại
- [ ] Tìm một mã sắp GDKHQ cổ tức, tự tính giá tham chiếu sau điều chỉnh rồi kiểm tra lại vào đúng ngày đó
- [ ] Đặt thử một lệnh LO 100 chứng chỉ quỹ ETF (số tiền nhỏ) và theo dõi quá trình T+2
- [ ] Tính tổng chi phí nếu bạn mua bán 10 lần/tháng với vốn 100 triệu

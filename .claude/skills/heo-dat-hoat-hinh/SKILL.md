---
name: heo-dat-hoat-hinh
description: Dùng mỗi khi người dùng yêu cầu thêm kiến thức mới, thêm module/bài học/chủ đề, mở rộng hoặc sửa nội dung giáo trình chứng khoán trong thư mục này. Tạo trang HTML phong cách truyện tranh hoạt hình "Heo Đất & Cú Già" có đồ chơi tương tác, dùng bộ kit chung trong assets/.
---

# Giáo trình hoạt hình "Heo Đất & Cú Già"

Mọi nội dung học của giáo trình này là trang HTML phong cách truyện tranh. Trang mẫu chuẩn là `01-tai-chinh-ca-nhan.html`: **đọc nó trước khi viết trang mới** và bắt chước cấu trúc, giọng văn, mật độ tương tác.

## Quy tắc bắt buộc

1. **Chỉ tạo và sửa file trong thư mục gốc của repo này** (`/Users/nguyensang/Documents/projects/stocks`). Không tạo nội dung ở nơi khác: không thư mục tạm, không artifact, không Google Docs/Claude Docs, không thư mục con mới ngoài `assets/`.
2. Nội dung học là file `.html` đặt ở thư mục gốc, tên dạng `NN-ten-khong-dau.html` (số thứ tự hai chữ số tiếp theo, chữ thường, nối bằng gạch ngang). Không tạo file `.md` cho nội dung học.
3. Mọi trang dùng bộ kit chung: `assets/truyen.css` và `assets/truyen.js`. Không chép lại CSS/JS của kit vào trang; CSS/JS riêng của trang chỉ dành cho đồ chơi đặc thù của trang đó và chỉ dùng token màu của kit (`var(--money)`, `var(--pig)`...), không dùng mã màu cứng chỉ hợp một chế độ sáng/tối.
4. Sau khi thêm trang: thêm một dòng vào mảng `MODULES` trong script của `index.html` (đúng thứ tự học; `id` trùng với `data-module` của checklist), và cập nhật liên kết "Chương sau" ở trang đứng trước để trỏ sang trang mới (trang mới thì trỏ tiếp sang trang mà trang trước từng trỏ tới).
   Trang hiện có: `01`…`10` là module học, `11-thuat-ngu-va-tai-nguyen.html` là tra cứu, `nhat-ky-dau-tu.html` là nhật ký (dữ liệu lưu localStorage, có sao lưu ra file). Kiến thức mới mở rộng một module có sẵn thì thêm mục vào trang đó thay vì tạo trang mới; thêm thuật ngữ mới vào trang 11.
5. Chỉ thêm vào `assets/` khi một thành phần thật sự dùng lại ở nhiều trang; khi sửa kit, kiểm tra không làm vỡ các trang đang có.
6. Không dùng ảnh từ internet. Nhân vật và hình minh họa vẽ bằng SVG (kit có sẵn Heo và Cú). Thư viện ngoài chỉ khi thật cần, ghim phiên bản cụ thể.
7. Mọi con số minh họa phải tính lại được: khi trang có máy tính hoặc ví dụ số, chạy thử công thức bằng `node -e` để chắc kết quả khớp với lời thoại. Không bịa số liệu thị trường; nếu cần số liệu thực tế mới, nói rõ nguồn và thời điểm.
8. Nội dung mang tính giáo dục, không khuyến nghị mua bán mã cụ thể. Giữ dòng `.disclaimer` ở cuối trang.

## Nhân vật và giọng văn

- **Heo Đất** (`data-char="pig:<mood>"`, mood: `happy`, `worried`, `wow`, `proud`, `sad`): người mới, háo hức, hay vội, hay mắc đúng những sai lầm phổ biến. Xưng "em", gọi "thầy".
- **Cú Già** (`data-char="owl:<mood>"`, mood: `talk`, `stern`, `smile`): người thầy điềm tĩnh, giải thích bằng ví dụ số cụ thể. Xưng "thầy", gọi "con".
- Hội thoại ngắn, mỗi bong bóng 1–3 câu, tiếng Việt tự nhiên. Lời thoại dẫn dắt; kiến thức chính xác (định nghĩa, công thức, bảng) vẫn phải có đủ, đặt trong `.chalk`, `.callout`, `.tbl` hoặc đoạn văn.
- Tên mục vui nhưng rõ nghĩa, ví dụ "Lạm phát: con mọt ăn tiền".
- Viết thẳng, câu ngắn, chủ động. Không dùng emoji làm đề mục.

## Cấu trúc một trang

Theo thứ tự (xem `template.html` trong thư mục skill này để có bộ khung chép sẵn):

1. `nav.topnav`: link "← Mục lục" về `index.html` và nhãn module.
2. `header.hero`: eyebrow (Module · thời lượng), `h1` tên vui của chương, `.sub` mô tả một câu, rồi `.strip` gồm 4–5 khung truyện mở đầu nêu tình huống và thông điệp chính.
3. Mỗi mục kiến thức là `section.chapter` với `.chapter-head` (`.tag` số mục + `h2`), gồm:
   - một khung hội thoại `.panel.talk` (Heo hỏi/sai, Cú giải thích), và
   - ít nhất một **đồ chơi** `.panel.toy` khi mục có số liệu, công thức, phân loại hoặc quy trình: thanh trượt + `.stat`, biểu đồ SVG tự vẽ, nút chọn tình huống, câu đố `.mcq`, thẻ lật `.flip`, bảng `.tbl`.
4. Mỗi trang có ít nhất một câu đố `.mcq` kiểm tra hiểu bài.
5. `section#bai-tap`: checklist `ul#tasks[data-module="NN"]` với `#feedPig`, `#feedText`, `#feedBar` (kit tự lưu tiến độ và cho Heo ăn xu), sau đó thẻ `a.panel.next` sang chương sau, rồi `.disclaimer`.

## Thành phần của kit (assets/truyen.js tự khởi tạo)

| Thành phần | Cách dùng |
|---|---|
| Nhân vật | `<span class="char" data-char="pig:happy"></span>`; trong JS: `Truyen.pig('wow')`, `Truyen.owl('stern')` trả về chuỗi SVG |
| Bong bóng thoại | `<div class="say pig"><span class="char" data-char="pig:happy"></span><p class="bubble">…</p></div>`; Cú nói bên phải: `class="say owl right"` và đặt `.char` sau `.bubble` |
| Câu đố | `<div class="mcq q" data-answer="1" data-right="…" data-wrong="…"><h3>…</h3><div class="opts"><button class="opt" type="button">…</button>…</div></div>` (`data-answer` tính từ 0) |
| Thẻ lật | `<div class="cards"><button class="flip" type="button"><span class="front">Thuật ngữ</span><span class="back">Giải thích</span></button></div>` |
| Bài tập | `ul#tasks[data-module="NN"]`, mỗi mục `<li><label><input type="checkbox" id="tN"><span>…</span></label></li>` |
| Định dạng số | `Truyen.money(v)` → "3,8 tỷ"/"45 triệu"; `Truyen.pct(x)`; `Truyen.num(x, d)`; `Truyen.trim(x, d)`; `Truyen.niceStep(max)` cho trục biểu đồ |
| Lưu trữ | `Truyen.store(key, val)` đọc/ghi localStorage có try/catch |
| Khối khác | `.chalk` (công thức), `.callout` / `.callout.warn` / `.callout.good`, `.tbl-wrap > table.tbl`, `.stat.money` / `.stat.warn`, `.chips > .chip`, `.legend`, `.chart-box > svg`, `.verdict` |

Script trang đặt cuối `body`, sau `<script src="assets/truyen.js"></script>`, bọc trong IIFE, dùng `var T = Truyen`.

## Thiết kế

- Giao diện chạy được cả nền sáng lẫn tối (token đã có trong kit), rộng 400px trên điện thoại không bị cuộn ngang. Bảng rộng đặt trong `.tbl-wrap`.
- Biểu đồ vẽ đúng tỷ lệ: một hàm scale cho cả điểm, vạch và nhãn; chữ trong SVG lấy màu từ token.
- Trang phải đầy đủ ngay khi mở: các ô kết quả có giá trị mặc định hợp lý, không để trống chờ người dùng nhập.

## Kiểm tra trước khi báo xong

1. `node --check` phần script của trang (trích từ thẻ `<script>` cuối) để chắc không lỗi cú pháp.
2. Chạy lại các phép tính mẫu bằng `node -e`, so với lời thoại.
3. Kiểm tra mọi `href` trỏ đến file có thật trong thư mục.
4. Đối chiếu: không mất ý, số liệu, bảng hoặc bài tập nào so với nội dung yêu cầu.

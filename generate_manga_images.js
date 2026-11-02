const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const downloadsDir = path.join(process.env.USERPROFILE, 'Downloads', 'Manga_ITK65_HanhTrinhVoiDich');
const tempHtmlDir = path.join(__dirname, 'temp_manga_pages');
const scenesDir = path.join(__dirname, 'scenes');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}
if (!fs.existsSync(tempHtmlDir)) {
  fs.mkdirSync(tempHtmlDir, { recursive: true });
}

// Scene image aliases
const IMG = {
  cover: path.join(scenesDir, 'cover.jpg').replace(/\\/g, '/'),
  walkout: path.join(scenesDir, 'manga_scene_campus_walkout_1793349516139.jpg').replace(/\\/g, '/'),
  dribble: path.join(scenesDir, 'manga_scene_sprint_dribble_1793349521974.jpg').replace(/\\/g, '/'),
  tackle: path.join(scenesDir, 'manga_scene_tackle_clash_1793349542281.jpg').replace(/\\/g, '/'),
  volley: path.join(scenesDir, 'manga_scene_volley_goal_1793349554853.jpg').replace(/\\/g, '/'),
  longshot: path.join(scenesDir, 'manga_scene_long_shot_1793349586655.jpg').replace(/\\/g, '/'),
  gksave: path.join(scenesDir, 'manga_scene_gk_save_1793349518848.jpg').replace(/\\/g, '/'),
  huddle: path.join(scenesDir, 'manga_scene_team_huddle_1793349566831.jpg').replace(/\\/g, '/'),
  trophy: path.join(scenesDir, 'manga_scene_trophy_lift_1793349496655.jpg').replace(/\\/g, '/'),
};

const pagesData = [
  {
    page: 1,
    fileSlug: "Trang_01_Khoi_Dau_UTC2",
    title: "Rời Bàn Phím, Bước Ra Sân Cỏ UTC2",
    panels: [
      {
        num: 1, title: "Khuôn viên UTC2", sfx: "XÀO XẠC...",
        img: IMG.walkout, pos: "center top", zoom: 1.05,
        visual: "Toàn cảnh khuôn viên trường ĐH Giao thông Vận tải (UTC2) ngập nắng vàng, hàng cây xanh mát.",
        caption: "Giữa mái trường UTC2, nơi những thế hệ sinh viên Công nghệ Thông tin ngày đêm miệt mài bên những dòng code...",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Phòng Lab CNTT", sfx: "CẠCH!",
        img: IMG.walkout, pos: "left center", zoom: 1.25,
        visual: "Gập laptop sau khi hoàn tất bài tập lớn, nụ cười rạng rỡ của những chàng trai IT sẵn sàng ra sân.",
        caption: null, speaker: "Cầu thủ CNTT", dialogue: "Debug xong task cuối rồi! Đến giờ ra sân thôi anh em ơi!"
      },
      {
        num: 3, title: "Màu Áo ITK65", sfx: "XOẠT!",
        img: IMG.cover, pos: "center 30%", zoom: 1.35,
        visual: "Cận cảnh chiếc áo đấu ITK65 màu xanh navy đậm, tay áo royal blue và cổ tim viền đôi đỏ-trắng.",
        caption: "Có một sân chơi không có dòng lệnh, nhưng đòi hỏi sự chính xác tuyệt đối và nhịp đập đồng đội...",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Bước Vào Sân Cỏ", sfx: "BỘP! VÚT!",
        img: IMG.dribble, pos: "center bottom", zoom: 1.1,
        visual: "Đôi giày đinh dẫm mạnh mẽ lên mặt cỏ xanh rì của sân bóng UTC2, quả bóng lăn đến chân.",
        caption: "Đó chính là sân cỏ! Nơi giải bóng đá Khoa CNTT chính thức khởi tranh!",
        speaker: "Đội trưởng Minh", dialogue: "Mục tiêu duy nhất lần này: CHINH PHỤC NGÔI VƯƠNG!"
      }
    ]
  },
  {
    page: 2,
    fileSlug: "Trang_02_Hoi_Quan_ITK65",
    title: "Hội Quân ITK65 – Tinh Thần Rực Lửa",
    panels: [
      {
        num: 1, title: "Khởi Động Nhuần Nhuyễn", sfx: "BỘP! TÁCH!",
        img: IMG.walkout, pos: "right center", zoom: 1.15,
        visual: "Cầu thủ ITK65 khởi động ép cơ, chuyền bóng ngắn với nụ cười rạng rỡ đầy năng lượng.",
        caption: null, speaker: "Tiền vệ Huy", dialogue: "Hôm nay cảm giác bóng tốt lắm đấy Minh!"
      },
      {
        num: 2, title: "Ánh Mắt Quyết Tâm", sfx: "XIẾT... SOẠT!",
        img: IMG.cover, pos: "center 20%", zoom: 1.45,
        visual: "Đội trưởng Minh cúi người thắt chặt dây giày đinh, ánh mắt ngước lên nhìn thẳng vào ống kính cực kỳ sắc bén.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Khởi động thật kỹ vào. Với chúng ta, trận nào cũng là trận chung kết!"
      },
      {
        num: 3, title: "Đội Hình ITK65", sfx: "GIÓ THỔI...",
        img: IMG.huddle, pos: "center top", zoom: 1.05,
        visual: "Toàn đội ITK65 đứng dàn hàng ngang khoác vai nhau trên sân cỏ UTC2 rực rỡ nắng vàng.",
        caption: "ITK65 bước vào giải đấu năm nay với một khát vọng duy nhất đã được nung nấu từ rất lâu...",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Tiếng Hô Quyết Chiến", sfx: "ẦM!!",
        img: IMG.huddle, pos: "center center", zoom: 1.25,
        visual: "Cả đội cùng chụm đầu, đặt chồng tay lên nhau giữa vòng tròn và gào vang khẩu hiệu quyết tâm rực lửa.",
        caption: null, speaker: "Toàn đội ITK65", dialogue: "CHINH PHỤC NGÔI VƯƠNG! 1... 2... 3... ITK65 TIẾN LÊN!!"
      }
    ]
  },
  {
    page: 3,
    fileSlug: "Trang_03_Bang_Dau_Tu_Than",
    title: "Bảng Đấu Tử Thần Lộ Diện",
    panels: [
      {
        num: 1, title: "Kết Quả Bốc Thăm", sfx: "TÍCH TẮC...",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Bảng kết quả bốc thăm: BẢNG B: ITK65, ITK64, ITK66 Đội 2, Cựu Sinh Viên.",
        caption: "Hai bảng đấu... và số phận đã đưa ITK65 rơi vào Bảng B - 'bảng đấu tử thần' khốc liệt nhất giải!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Phân Tích Đối Thủ", sfx: "XÌ XÀO...",
        img: IMG.huddle, pos: "left 40%", zoom: 1.2,
        visual: "Các thành viên ITK65 tụ họp quanh sa bàn chiến thuật, nét mặt nghiêm túc nghiên cứu đối thủ.",
        caption: null, speaker: "Hậu vệ Nam", dialogue: "Bảng này căng thật! K64 rất khỏe, còn các anh Cựu sinh viên thì quá già rơ..."
      },
      {
        num: 3, title: "Thuật Toán Chiến Thắng", sfx: "CỘC CỘC!",
        img: IMG.cover, pos: "center 25%", zoom: 1.35,
        visual: "Minh chỉ tay lên sơ đồ chiến thuật, ánh mắt sắc sảo lóe lên tia sáng đầy tự tin.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Càng khó khăn, chiến thắng mới càng ngọt ngào! Chúng ta hiểu nhau từ từng dòng code, sân cỏ này cũng thế!"
      },
      {
        num: 4, title: "Khí Thế Bừng Sáng", sfx: "PHÙNG!!",
        img: IMG.dribble, pos: "center 40%", zoom: 1.15,
        visual: "Cả đội siết chặt nắm đấm, ngọn lửa ý chí bùng lên quanh từng người như hào quang manga shonen.",
        caption: "ITK65 không đến đây để tham gia cho đủ đội hình... Chúng tôi đến để chiến đấu!",
        speaker: "Toàn đội", dialogue: "SẴN SÀNG CHIẾN ĐẤU!!"
      }
    ]
  },
  {
    page: 4,
    fileSlug: "Trang_04_Vong_Bang_Gap_ITK64",
    title: "Vòng Bảng: Bão Táp Khai Màn Gặp ITK64",
    panels: [
      {
        num: 1, title: "Tiếng Còi Khai Cuộc", sfx: "TUUUÚT!",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Trọng tài nổi còi khai cuộc trận đầu tiên với ITK64. Khán giả đứng kín đường biên reo hò cuồng nhiệt.",
        caption: "Trận khai màn gặp ITK64. Sức trẻ và lối đá pressing tầm cao điên cuồng lập tức tạo bão táp!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Cú Sút Bất Ngờ", sfx: "OÀNH!!",
        img: IMG.longshot, pos: "center center", zoom: 1.1,
        visual: "Tiền đạo ITK64 tung cú sút xa bất ngờ, bóng bay căng xé gió về góc hiểm khung thành ITK65.",
        caption: null, speaker: "Thủ môn ITK65", dialogue: "Nguy hiểm! Bọc lót mau!!"
      },
      {
        num: 3, title: "Bàn Thua Sớm", sfx: "XOẠC LƯỚI!",
        img: IMG.tackle, pos: "center bottom", zoom: 1.2,
        visual: "Lưới rung lên! Bảng điểm nhảy số: ITK64: 1 - 0 :ITK65. Cầu thủ ITK65 thở dốc dưới cái nắng gay gắt.",
        caption: null, speaker: "Cổ động viên", dialogue: "Trời ơi! K64 đá gắt thật, K65 bị dẫn trước rồi!"
      },
      {
        num: 4, title: "Vực Dậy Tinh Thần", sfx: "BỐP! BỐP!",
        img: IMG.cover, pos: "center 25%", zoom: 1.3,
        visual: "Đội trưởng Minh vỗ tay thật mạnh, giơ tay kéo từng đồng đội đứng dậy khỏi bãi cỏ, ánh mắt bốc lửa.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Ngẩng cao đầu lên anh em! Trận đấu mới bắt đầu thôi, đẩy cao đội hình phản công ngay!"
      }
    ]
  },
  {
    page: 5,
    fileSlug: "Trang_05_Loi_Nguoc_Dong_Man_Nhan",
    title: "Bản Lĩnh Trỗi Dậy: Lội Ngược Dòng Mãn Nhãn",
    panels: [
      {
        num: 1, title: "Lối Chơi 1 Chạm", sfx: "TÁCH! TÁCH!",
        img: IMG.dribble, pos: "center 45%", zoom: 1.15,
        visual: "ITK65 dàn cự ly phối hợp đập nhả 1 chạm cực kỳ chính xác ở khu vực giữa sân.",
        caption: "Khi tư duy logic được vận hành trơn tru trên sân cỏ, nhịp điệu trận đấu lập tức đảo chiều!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Đường Kiến Tạo Vàng", sfx: "VÚT!!",
        img: IMG.longshot, pos: "right center", zoom: 1.2,
        visual: "Tiền vệ vẩy má ngoài chân phải, tung một đường chuyền bổng rót bóng loại bỏ hoàn toàn hàng thủ đối phương.",
        caption: null, speaker: "Tiền vệ Huy", dialogue: "Minh! Thoát xuống ngay!!"
      },
      {
        num: 3, title: "Cú Vô-Lê Sấm Sét", sfx: "KABOOOM!!",
        img: IMG.volley, pos: "center center", zoom: 1.05,
        visual: "Dynamic Speedlines: Minh bứt tốc phá bẫy việt vị, vung chân bắt vô-lê sấm sét khi bóng chưa chạm đất!",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "VÀO NÀY!!"
      },
      {
        num: 4, title: "Ngược Dòng 2-1", sfx: "HOAN HÔ ẦM Ĩ!",
        img: IMG.huddle, pos: "center 40%", zoom: 1.25,
        visual: "Bóng găm thẳng vào góc chữ A! Tỷ số đảo chiều ngoạn mục thành ITK65: 2 - 1 :ITK64. Cả đội trượt gối ăn mừng!",
        caption: "Bản lĩnh của ITK65 đã lên tiếng đúng lúc! Chiến thắng mở màn nghẹt thở nhưng xứng đáng!",
        speaker: "Toàn đội", dialogue: "LỘI NGƯỢC DÒNG THÀNH CÔNG!!"
      }
    ]
  },
  {
    page: 6,
    fileSlug: "Trang_06_Dau_Tri_ITK66",
    title: "Đấu Trí Chiến Thuật Trước ITK66 Đội 2",
    panels: [
      {
        num: 1, title: "Bức Tường Bê Tông", sfx: "XÌ XÀO...",
        img: IMG.tackle, pos: "center 40%", zoom: 1.1,
        visual: "Trận 2 gặp ITK66 Đội 2. Đối thủ dựng hàng rào 'xe buýt 2 tầng' phòng ngự tiêu cực, bịt kín vòng cấm địa.",
        caption: null, speaker: "Hậu vệ ITK66", dialogue: "Kèm chặt số 65 vào, không cho sút bóng!"
      },
      {
        num: 2, title: "Áp Lực Thời Gian", sfx: "THỊCH... THỊCH...",
        img: IMG.cover, pos: "center 20%", zoom: 1.4,
        visual: "Mồ hôi nhỏ tong tòng trên trán cầu thủ ITK65. Đồng hồ trôi dần về phút cuối, tỷ số vẫn ghìm ở 0-0 bế tắc.",
        caption: "Một thế trận nghẹt thở đến từng giây. Một cú sảy chân có thể đẩy ITK65 vào hiểm cảnh...",
        speaker: null, dialogue: null
      },
      {
        num: 3, title: "Cú Nã Đại Bác 25m", sfx: "OẰNG!!",
        img: IMG.longshot, pos: "center center", zoom: 1.1,
        visual: "Nhận thấy đối phương lùi sâu, Minh bất ngờ vung chân nã đại bác mu lai má ngoài từ cự ly 25m!",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Hệ thống nào cũng có kẽ hở!!"
      },
      {
        num: 4, title: "Dội Xà Tung Lưới", sfx: "KENG... XOẠC!!",
        img: IMG.volley, pos: "center 30%", zoom: 1.25,
        visual: "Bóng dội mép dưới xà ngang đập thẳng vào lưới trong sự ngỡ ngàng của thủ môn đối phương! 1-0 cho ITK65!",
        caption: "Siêu phẩm sút xa khai thông bế tắc! Chiến thắng thứ hai liên tiếp!",
        speaker: "Bình luận viên", dialogue: "SIÊU PHẨM KHÔNG TƯỞNG CỦA ITK65!!"
      }
    ]
  },
  {
    page: 7,
    fileSlug: "Trang_07_Dung_Do_Cuu_Sinh_Vien",
    title: "Thách Thức Cựu Sinh Viên: Va Chạm Nảy Lửa",
    panels: [
      {
        num: 1, title: "Kinh Nghiệm Đàn Anh", sfx: "GỪM...",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Trận quyết định ngôi đầu gặp Đội Cựu Sinh Viên – những đàn anh dày dặn kinh nghiệm và lối đá già dơ.",
        caption: null, speaker: "Đội trưởng Cựu SV", dialogue: "Mấy chú khóa dưới đá nét đấy, nhưng kinh nghiệm bọn anh không để trưng đâu!"
      },
      {
        num: 2, title: "Không Chiến Quyết Liệt", sfx: "RẦM!! HỰ!",
        img: IMG.tackle, pos: "center center", zoom: 1.1,
        visual: "Pha tranh chấp bóng bổng trên không cực kỳ nảy lửa giữa trung vệ ITK65 và tiền đạo cựu sinh viên, cỏ bay mù mịt.",
        caption: null, speaker: "Trung vệ ITK65", dialogue: "Bọn em tôn trọng các anh, nhưng chiến thắng này bọn em không nhường!"
      },
      {
        num: 3, title: "Dũng Khí Thủ Môn", sfx: "BỊCH!!",
        img: IMG.gksave, pos: "center center", zoom: 1.1,
        visual: "Đối thủ phản công chớp nhoáng, thủ môn ITK65 lao ra dũng cảm ôm trọn bóng ngay trước mũi giày tiền đạo đối phương.",
        caption: null, speaker: "Thủ môn ITK65", dialogue: "Bức tường thép ITK65 không thể bị xuyên thủng!"
      },
      {
        num: 4, title: "Tinh Thần Thể Thao", sfx: "BỐP!",
        img: IMG.huddle, pos: "center 35%", zoom: 1.2,
        visual: "Cầu thủ hai bên đưa tay kéo nhau đứng dậy sau pha va chạm, đập tay tôn trọng tinh thần thể thao đẹp đẽ.",
        caption: "Sức trẻ và kinh nghiệm cọ xát tạo nên một trận đấu đỉnh cao của những người anh em CNTT UTC2.",
        speaker: "Cựu SV", dialogue: "Khá lắm các chú em! Tinh thần tuyệt vời!"
      }
    ]
  },
  {
    page: 8,
    fileSlug: "Trang_08_Nhat_Bang_B_Tien_Buoc",
    title: "Bàn Thắng Vàng – Nhất Bảng Hiên Ngang Tiến Bước",
    panels: [
      {
        num: 1, title: "Phản Công Phút 89", sfx: "VÚT! VÚT!",
        img: IMG.dribble, pos: "center center", zoom: 1.1,
        visual: "Phút 89, ITK65 tổ chức đợt phản công mẫu mực, chuyền 3 nhịp từ sân nhà sang thẳng cánh đối phương.",
        caption: "Thời gian cạn dần, và đây là cơ hội cuối cùng!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Cú Đệm Lòng Quyết Định", sfx: "BỘP... LƯỚI RUNG!",
        img: IMG.volley, pos: "center 40%", zoom: 1.2,
        visual: "Cú căng ngang dọn cỗ và pha đệm bóng cận thành chuẩn xác! 1-0 nghiêng về ITK65 trước Đội Cựu Sinh Viên!",
        caption: null, speaker: "Cầu thủ ghi bàn", dialogue: "VÀO RỒI ANH EM ƠI!!"
      },
      {
        num: 3, title: "9 Điểm Tuyệt Đối", sfx: "TINH TING!",
        img: IMG.trophy, pos: "center 30%", zoom: 1.2,
        visual: "Bảng xếp hạng Manga: BẢNG B: HẠNG 1 - ITK65 (9 ĐIỂM TUYỆT ĐỐI - TOÀN THẮNG).",
        caption: "Toàn thắng cả 3 trận! ITK65 hiên ngang tiến vào vòng knockout với tư thế đội đầu bảng B!",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Mắt Hướng Ngôi Vương", sfx: "RẦM RỘ...",
        img: IMG.cover, pos: "center 20%", zoom: 1.35,
        visual: "Toàn đội ITK65 nhìn về phía khán đài danh dự, nơi chiếc Cúp Vàng đang phản chiếu ánh hoàng hôn rực rỡ.",
        caption: "Vòng bảng đã khép lại, nhưng thử thách khắc nghiệt nhất giờ mới chính thức bắt đầu...",
        speaker: "Đội trưởng Minh", dialogue: "Vòng bảng chỉ là màn khởi động... Mục tiêu tiếp theo: Trận Chung Kết!"
      }
    ]
  },
  {
    page: 9,
    fileSlug: "Trang_09_Tu_Ket_Nghet_Tho",
    title: "Tứ Kết Nghẹt Thở: Đối Mặt Lối Đá Rát",
    panels: [
      {
        num: 1, title: "Cửa Tử Vòng Trực Tiếp", sfx: "BƯỚC CHÂN...",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Hai đội bước ra sân trong không khí vòng loại trực tiếp lạnh ngắt và căng như dây đàn.",
        caption: "Vòng Knock-out: Không còn cơ hội sửa sai. Thua là về nước, thắng mới được đi tiếp!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Tia Sét Ánh Mắt", sfx: "ZZZZT!",
        img: IMG.cover, pos: "center 20%", zoom: 1.45,
        visual: "Cận cảnh ánh mắt hai đội trưởng chạm nhau tóe ra tia sét đối đầu đặc trưng của anime thể thao.",
        caption: null, speaker: "Đội trưởng đối thủ", dialogue: "Hôm nay hành trình của các cậu sẽ dừng lại ở đây!"
      },
      {
        num: 3, title: "Pha Vào Bóng Thô Bạo", sfx: "XOẠC!! RẦM!",
        img: IMG.tackle, pos: "center center", zoom: 1.1,
        visual: "Pha vào bóng nguy hiểm từ phía sau của đối phương khiến tiền vệ trụ cột ITK65 ngã nhào, ôm gối đau đớn.",
        caption: null, speaker: "Cầu thủ chấn thương", dialogue: "Á... Cổ chân của mình!"
      },
      {
        num: 4, title: "Sơ Cứu Khẩn Cấp", sfx: "XỊT XỊT!",
        img: IMG.huddle, pos: "left 40%", zoom: 1.25,
        visual: "Trọng tài rút thẻ vàng. Nhân viên y tế vội vã chạy vào sân dùng bình xịt lạnh giảm đau khẩn cấp.",
        caption: null, speaker: "Bác sĩ sân cỏ", dialogue: "Em bị lật nhẹ cổ chân rồi, có thể tiếp tục thi đấu được không?!"
      }
    ]
  },
  {
    page: 10,
    fileSlug: "Trang_10_Y_Chi_Thep_Nen_Dau",
    title: "Ý Chí Thép: Nén Đau Chiến Đấu Vì Màu Cờ Sắc Áo",
    panels: [
      {
        num: 1, title: "Từ Chối Cáng Thương", sfx: "NGHIẾN RĂNG...",
        img: IMG.cover, pos: "center 25%", zoom: 1.35,
        visual: "Cầu thủ chấn thương cắn chặt môi, mồ hôi đầm đìa, từ chối cáng cứu thương và tự chống tay đứng dậy.",
        caption: null, speaker: "Cầu thủ nén đau", dialogue: "Băng chặt lại giúp em! Em phải đá tiếp... Đội bóng đang cần em!"
      },
      {
        num: 2, title: "Vòng Tay Đồng Đội", sfx: "BỘP!",
        img: IMG.huddle, pos: "center 30%", zoom: 1.2,
        visual: "Minh và hậu vệ Huy đến khoác vai đồng đội, chia sẻ sức nặng cơ thể bằng cái ôm siết chặt.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Cậu không đơn độc đâu! Cứ yên tâm, phía sau đã có bọn mình bọc lót!"
      },
      {
        num: 3, title: "Lá Chắn Thép", sfx: "CHẶN ĐỨNG!",
        img: IMG.tackle, pos: "center center", zoom: 1.15,
        visual: "Đối thủ dồn bóng khoét vào vị trí chấn thương, nhưng toàn đội ITK65 dựng lên bức tường phòng ngự kiên cố.",
        caption: "Không lùi bước! Không buông xuôi! Tinh thần đồng đội biến thành bức khiên bất khả xâm phạm!",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Chiến Thắng Bằng Nước Mắt", sfx: "TUUUÚT! HẾT GIỜ!",
        img: IMG.dribble, pos: "center 40%", zoom: 1.2,
        visual: "Pha phản công chớp nhoáng giúp ITK65 giữ vững chiến thắng tối thiểu 1-0. Trọng tài thổi còi kết thúc trận tứ kết!",
        caption: "Vượt qua thử thách máu và nước mắt! Tấm vé Bán Kết thuộc về ITK65!",
        speaker: "Toàn đội", dialogue: "VÀO BÁN KẾT RỒI!!"
      }
    ]
  },
  {
    page: 11,
    fileSlug: "Trang_11_Ban_Ket_Giong_Bao_ITK67",
    title: "Bán Kết Giông Bão: Rượt Đuổi Điên Rồ Với ITK67",
    panels: [
      {
        num: 1, title: "Trận Bán Kết Trong Mơ", sfx: "RẦM RỘ!",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Trận Bán kết trong mơ: ITK65 đụng độ ITK67 Đội 1 – đội bóng sở hữu hàng công hủy diệt nhất giải.",
        caption: "Trận chiến giữa bản lĩnh đàn anh ITK65 và sức trẻ vũ bão của ITK67!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Đôi Công Điên Cuồng 1-1", sfx: "BÙM!! VÀO!!",
        img: IMG.volley, pos: "center center", zoom: 1.05,
        visual: "Khung tranh chia đôi: ITK67 sút xa mở tỷ số 1-0, ngay sau đó Minh đánh đầu gỡ hòa 1-1 đẹp mắt!",
        caption: null, speaker: "Bình luận viên", dialogue: "Cuộc đôi công nghẹt thở! Tốc độ trận đấu quá chóng mặt!"
      },
      {
        num: 3, title: "Thử Thách Phút 90+2", sfx: "VÚT... OÀNH!!",
        img: IMG.longshot, pos: "center center", zoom: 1.15,
        visual: "Phút 90+2, tiền đạo ITK67 đối mặt thủ môn ITK65, tung cú nã đại bác hiểm hóc vào góc chữ A!",
        caption: null, speaker: "CĐV ITK65", dialogue: "Nguy hiểm quá, chết rồi!!"
      },
      {
        num: 4, title: "Đầu Ngón Tay Thần Thánh", sfx: "BỐP!! KENG!!",
        img: IMG.gksave, pos: "center center", zoom: 1.05,
        visual: "Thủ môn ITK65 bay người như cánh chim đại bàng, dùng đầu ngón tay đẩy bóng chạm xà ngang bay vọt ra ngoài!",
        caption: "Pha cứu thua không tưởng của mùa giải! Trận đấu phải phân định bằng loạt sút luân lưu 11m!",
        speaker: "Thủ môn ITK65", dialogue: "CÒN LÂU NHÉ!!"
      }
    ]
  },
  {
    page: 12,
    fileSlug: "Trang_12_Luan_Luu_Dinh_Menh",
    title: "Đấu Súng Luân Lưu – Đôi Tay Vàng Lịch Sử",
    panels: [
      {
        num: 1, title: "Chấm 11m Nghiệt Ngã", sfx: "THỊCH... THỊCH...",
        img: IMG.gksave, pos: "center 40%", zoom: 1.15,
        visual: "Quả bóng đặt trên chấm 11m. Thủ môn ITK65 dang rộng hai tay trên vạch vôi, ánh mắt tập trung tột độ.",
        caption: "Lượt sút thứ 5 quyết định! Cả sân bóng nín thở chờ đợi định mệnh...",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Cú Vung Chân Quyết Định", sfx: "RẦM!!",
        img: IMG.longshot, pos: "center center", zoom: 1.1,
        visual: "Cầu thủ đối phương vung chân sút cực căng bóng bay xoáy hiểm hóc về góc phải.",
        caption: null, speaker: "Cầu thủ sút phạt", dialogue: "Chung kết là của bọn tao!"
      },
      {
        num: 3, title: "Cản Phá Xuất Thần", sfx: "BỐP!! VĂNG RA!",
        img: IMG.gksave, pos: "center center", zoom: 1.05,
        visual: "Đoán đúng hướng bóng, thủ môn ITK65 đổ người xuất thần đấm văng quả bóng ra ngoài!",
        caption: null, speaker: "Thủ môn ITK65", dialogue: "BẮT BÀI RỒI NHÉ!!"
      },
      {
        num: 4, title: "Vỡ Òa Vé Chung Kết", sfx: "ROOOOAR!!",
        img: IMG.huddle, pos: "center center", zoom: 1.25,
        visual: "Toàn đội ITK65 từ giữa sân gào thét lao tới, đè ngửa người hùng thủ môn xuống sân cỏ ăn mừng điên cuồng!",
        caption: "Chiến thắng nghẹt thở! ITK65 chính thức giành tấm vé vàng bước vào TRẬN CHUNG KẾT!",
        speaker: "Toàn đội", dialogue: "CHUNG KẾT RỒI! CHÚNG TA LÀM ĐƯỢC RỒI!!"
      }
    ]
  },
  {
    page: 13,
    fileSlug: "Trang_13_Khong_Khi_Chung_Ket",
    title: "Ngày Chung Kết Lịch Sử Tại Sân Bóng UTC2",
    panels: [
      {
        num: 1, title: "Biển Người Cổ Vũ", sfx: "TÙNG TÙNG CẮC TÙNG!",
        img: IMG.walkout, pos: "center top", zoom: 1.1,
        visual: "Flycam toàn cảnh sân bóng Phân hiệu UTC2. Khán đài chật kín hàng trăm sinh viên và giảng viên cầm cờ hoa cổ vũ.",
        caption: null, speaker: "Khán đài UTC2", dialogue: "ITK65 TIẾN LÊN! VÔ ĐỊCH NÀO!!"
      },
      {
        num: 2, title: "Chiếc Cúp Vàng Chờ Đợi", sfx: "LẤP LÁNH...",
        img: IMG.trophy, pos: "center 30%", zoom: 1.25,
        visual: "Cận cảnh chiếc Cúp Vàng vô địch mạ bóng loáng đặt trên bục danh dự giữa sân cỏ ngập tràn ánh nắng.",
        caption: "90 phút để quyết định tất cả. Bao nhiêu nỗ lực, mồ hôi và khát vọng đều dồn vào trận đấu cuối cùng này!",
        speaker: null, dialogue: null
      },
      {
        num: 3, title: "Bước Ra Đấu Trường", sfx: "BƯỚC ĐỀU...",
        img: IMG.walkout, pos: "center center", zoom: 1.05,
        visual: "Các cầu thủ ITK65 chỉnh tề trong bộ áo đấu xanh navy viền đỏ trắng, từng bước chân bước ra sân trong tiếng vỗ tay rền vang.",
        caption: null, speaker: "Hậu vệ Nam", dialogue: "Đông khán giả quá, tim đập thình thịch luôn anh em ơi!"
      },
      {
        num: 4, title: "Bản Lĩnh Đội Trưởng", sfx: "SIẾT CHẶT!",
        img: IMG.cover, pos: "center 20%", zoom: 1.35,
        visual: "Minh quay lại nhìn thẳng vào từng đồng đội, nụ cười tự tin và ánh mắt kiên định làm dịu đi mọi áp lực.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Hãy biến tiếng reo hò đó thành sức mạnh! Hôm nay là ngày của chúng ta!"
      }
    ]
  },
  {
    page: 14,
    fileSlug: "Trang_14_Loi_The_Xung_Tran",
    title: "Lời Thề Trước Giờ Xung Trận: Không Đến Đây Để Về Nhì!",
    panels: [
      {
        num: 1, title: "Vòng Tròn Đồng Lòng", sfx: "LẮNG ĐỌNG...",
        img: IMG.huddle, pos: "center top", zoom: 1.1,
        visual: "Toàn đội khoác vai nhau thành vòng tròn kín giữa sân cỏ, đầu cúi sát nhau lắng nghe Đội trưởng dặn dò.",
        caption: "Khoảnh khắc gắn kết thiêng liêng trước giờ xung trận...",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Nhớ Lại Gian Khổ", sfx: "NGHẸN NGÀO...",
        img: IMG.huddle, pos: "center 40%", zoom: 1.25,
        visual: "Cận cảnh gương mặt xúc động nhưng đanh thép của Minh.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Anh em! Nhớ những đêm thức trắng vừa làm đồ án vừa ra sân tập không? Nhớ những vết thương trầy xước không?!"
      },
      {
        num: 3, title: "Lời Thề Đanh Thép", sfx: "RỰC LỬA!",
        img: IMG.cover, pos: "center 25%", zoom: 1.4,
        visual: "Từng ánh mắt của đồng đội sáng rực như những chiến binh manga sẵn sàng bước vào trận chiến quyết định.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Chúng ta đã đi một chặng đường quá dài! CHÚNG TA KHÔNG ĐẾN ĐÂY ĐỂ VỀ NHÌ!!"
      },
      {
        num: 4, title: "Tiếng Gầm Vang Sân", sfx: "ROOOOAR!!",
        img: IMG.huddle, pos: "center center", zoom: 1.3,
        visual: "Tất cả cùng giơ cao nắm đấm lên trời, tiếng thét đồng thanh làm rung chuyển cả sân vận động!",
        caption: null, speaker: "Toàn đội ITK65", dialogue: "CHIẾN ĐẤU ĐẾN CÙNG! VÔ ĐỊCH!!"
      }
    ]
  },
  {
    page: 15,
    fileSlug: "Trang_15_Khai_Man_Chung_Ket",
    title: "Đại Chiến Bùng Nổ: Giằng Co Từng Tấc Cỏ",
    panels: [
      {
        num: 1, title: "Còi Khai Màn Lịch Sử", sfx: "TUUUÚT!!",
        img: IMG.dribble, pos: "center center", zoom: 1.1,
        visual: "Trọng tài thổi còi khai cuộc trận chung kết! Bóng lăn trong tiếng reo hò sấm dậy của cổ động viên.",
        caption: "Trận chung kết bắt đầu với cường độ chóng mặt ngay từ những giây đầu tiên!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Cản Phá Quả Cảm", sfx: "BỘP!!",
        img: IMG.tackle, pos: "center center", zoom: 1.1,
        visual: "Đối thủ tấn công nguy hiểm, tiền đạo đối phương sút căng nhưng trung vệ ITK65 lăn xả dùng cả ngực cản phá!",
        caption: null, speaker: "Trung vệ Huy", dialogue: "Không có đường vào đâu!!"
      },
      {
        num: 3, title: "Thế Trận Bế Tắc 1-1", sfx: "CĂNG THẲNG...",
        img: IMG.cover, pos: "center 20%", zoom: 1.35,
        visual: "Tỷ số hòa 1-1 giằng co đến phút 85. Hai đội tranh chấp khốc liệt từng mét cỏ, thể lực bắt đầu cạn kiệt.",
        caption: "Thời gian trôi về những phút cuối. Chỉ một sai lầm nhỏ cũng có thể cướp đi giấc mơ vô địch!",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Bứt Tốc Trong Cạn Kiệt", sfx: "BỨT TỐC!",
        img: IMG.dribble, pos: "center 40%", zoom: 1.2,
        visual: "Chân Minh mỏi nhừ, bắp chân co cứng nhưng anh vẫn cắn răng lao theo một đường chuyền dài ra biên.",
        caption: null, speaker: "Đội trưởng Minh (nghĩ thầm)", dialogue: "Chỉ còn vài phút nữa thôi... Tuyệt đối không được bỏ cuộc!!"
      }
    ]
  },
  {
    page: 16,
    fileSlug: "Trang_16_Phut_88_Dinh_Menh",
    title: "Phút 88 Định Mệnh: Bản Giao Hưởng Phản Công",
    panels: [
      {
        num: 1, title: "Cú Xoạc Bóng Sạch", sfx: "XOẠC!! BẬT BÓNG!",
        img: IMG.tackle, pos: "center center", zoom: 1.1,
        visual: "Tiền vệ ITK65 nhoài người xoạc bóng sạch sẽ ngay trước mũi giày đối phương ở khu vực giữa sân.",
        caption: null, speaker: "Tiền vệ ITK65", dialogue: "CƯỚP ĐƯỢC BÓNG RỒI! PHẢN CÔNG MAU!!"
      },
      {
        num: 2, title: "Tam Giác 1 Chạm", sfx: "TÍCH! TẮC! TÍCH!",
        img: IMG.dribble, pos: "center center", zoom: 1.15,
        visual: "Ba cầu thủ ITK65 phối hợp tam giác 1 chạm biến hóa khôn lường xé toang toàn bộ hàng thủ đối phương.",
        caption: "Một pha phối hợp nhịp nhàng chuẩn xác như thuật toán tối ưu!",
        speaker: "Hậu vệ đối thủ", dialogue: "Chặn số 65 lại! Nó thoát xuống rồi!!"
      },
      {
        num: 3, title: "Chọc Khe Xuyên Tuyến", sfx: "VÚT BỔNG!",
        img: IMG.longshot, pos: "right center", zoom: 1.15,
        visual: "Đường chọc khe bổng hoàn mỹ rót bóng qua đầu thủ môn đối phương rơi vào khoảng trống vòng cấm.",
        caption: null, speaker: "Số 10 ITK65", dialogue: "MINH! KẾT LIỄU ĐI!!"
      },
      {
        num: 4, title: "Khoảnh Khắc Lịch Sử", sfx: "XÉ GIÓ!!",
        img: IMG.cover, pos: "center 25%", zoom: 1.35,
        visual: "Minh tung cú nước rút xé gió, vượt lên trên tất cả, ánh mắt khóa chặt vào tâm điểm trái bóng đang rơi.",
        caption: "Một khoảnh khắc! Một cơ hội duy nhất để khắc tên mình vào lịch sử!",
        speaker: null, dialogue: null
      }
    ]
  },
  {
    page: 17,
    fileSlug: "Trang_17_Cu_Sut_The_Ky",
    title: "Cú Sút Thế Kỷ – Xé Toang Khung Thành!",
    panels: [
      {
        num: 1, title: "Ngưng Đọng Thời Gian", sfx: "NGỪNG LẠI...",
        img: IMG.cover, pos: "center 20%", zoom: 1.3,
        visual: "Slow motion: Trái bóng rơi xuống vừa tầm chân, Minh xoay người dồn toàn bộ trọng tâm vung chân phải.",
        caption: "Bao nhiêu ngày tập luyện, bao nhiêu khát vọng của cả một tập thể... dồn trọn vào khoảnh khắc này!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Impact Frame Nổ Tung", sfx: "KRAAAASHHHH!!!!",
        img: IMG.volley, pos: "center center", zoom: 1.05,
        visual: "Impact Frame manga đỉnh cao: Mu bàn chân chạm bóng tóe ra sóng xung kích và tia chớp rực sáng bầu trời!",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "BAY VÀOOOOOOOOOO!!"
      },
      {
        num: 3, title: "Rách Góc Chữ A", sfx: "XOẸT... BÙM!!",
        img: IMG.volley, pos: "center 25%", zoom: 1.25,
        visual: "Bóng bay với quỹ đạo hình tia sét, vượt khỏi tầm với của thủ môn và găm rách góc chữ A màng lưới!",
        caption: null, speaker: "Bình luận viên", dialogue: "VÀOOOOOOOO! KHÔNG THỂ CẢN PHÁ!!"
      },
      {
        num: 4, title: "Tiếng Còi Mãn Cuộc", sfx: "TUUUÚT! TUUUÚT! TUUUUUUUÚT!!",
        img: IMG.trophy, pos: "center 30%", zoom: 1.2,
        visual: "Trọng tài nổi ba hồi còi mãn cuộc! Bảng tỷ số ấn định: ITK65: 2 - 1 :CHUNG KẾT!",
        caption: "TIẾNG CÒI MÃN CUỘC VANG LÊN! ITK65 ĐÃ CHÍNH THỨC TRỞ THÀNH NHÀ VÔ ĐỊCH!!",
        speaker: "Toàn bộ SV UTC2", dialogue: "VÔ ĐỊCH RỒI! ITK65 LÀ NHÀ VUA!!"
      }
    ]
  },
  {
    page: 18,
    fileSlug: "Trang_18_Vo_Oa_Nuoc_Mat",
    title: "Vỡ Òa Nước Mắt Hạnh Phúc",
    panels: [
      {
        num: 1, title: "Nước Mắt Người Đội Trưởng", sfx: "NỨC NỞ...",
        img: IMG.cover, pos: "center 25%", zoom: 1.4,
        visual: "Đội trưởng Minh quỳ gối gục đầu xuống mặt cỏ xanh, hai tay ôm mặt nấc nghẹn trong giọt nước mắt sung sướng.",
        caption: null, speaker: "Đội trưởng Minh", dialogue: "Làm được rồi... Chúng ta thực sự làm được rồi anh em ơi..."
      },
      {
        num: 2, title: "Khối Người Chiến Thắng", sfx: "ÔM CHẶT!",
        img: IMG.huddle, pos: "center 40%", zoom: 1.2,
        visual: "Ban huấn luyện và cầu thủ dự bị lao vào sân, ôm chầm lấy nhau thành một khối người khổng lồ đẫm mồ hôi.",
        caption: null, speaker: "Đồng đội ITK65", dialogue: "VÔ ĐỊCH THẬT RỒI! KHÔNG THỂ TIN NỔI!!"
      },
      {
        num: 3, title: "Cờ Hoa Nhuộm Sân Cỏ", sfx: "RỰC RỠ!",
        img: IMG.walkout, pos: "center center", zoom: 1.1,
        visual: "Thầy cô và bạn bè sinh viên Khoa CNTT UTC2 ùa xuống sân mang theo cờ hoa và tiếng reo hò vang rền.",
        caption: "Chiến thắng không tự nhiên mà đến. Nó là thành quả của mồ hôi, bản lĩnh và niềm tin chưa bao giờ tắt!",
        speaker: null, dialogue: null
      },
      {
        num: 4, title: "Thanh Xuân Đẹp Nhất", sfx: "ÁNH NẮNG...",
        img: IMG.huddle, pos: "center 30%", zoom: 1.25,
        visual: "Hai cầu thủ bạn thân khoác vai nhau nhìn lên bầu trời chiều UTC2, nụ cười rạng rỡ của thanh xuân tươi đẹp.",
        caption: null, speaker: "Hậu vệ Nam", dialogue: "Đây chắc chắn là kỷ niệm đẹp nhất thời sinh viên của tụi mình!"
      }
    ]
  },
  {
    page: 19,
    fileSlug: "Trang_19_Le_Trao_Cup_Vang",
    title: "Lễ Trao Giải – Chiếc Cúp Vàng Lấp Lánh Giữa Mưa Pháo Hoa",
    panels: [
      {
        num: 1, title: "Tấm Huy Chương Vàng", sfx: "TRANG TRỌNG...",
        img: IMG.trophy, pos: "left 35%", zoom: 1.25,
        visual: "Đại diện Ban Giám hiệu và Trưởng Bộ môn CNTT trang trọng trao từng tấm Huy Chương Vàng lên cổ các cầu thủ.",
        caption: null, speaker: "Thầy Trưởng Bộ Môn", dialogue: "Chúc mừng ITK65! Các em đã chiến đấu bằng cả trí tuệ và trái tim của người làm công nghệ!"
      },
      {
        num: 2, title: "Bước Lên Bục Số 1", sfx: "NÂNG CÚP...",
        img: IMG.trophy, pos: "center 30%", zoom: 1.2,
        visual: "Đội trưởng Minh bước lên bục vinh quang số 1, hai tay nắm chặt hai quai chiếc Cúp vô địch sáng ngời.",
        caption: "Và đây rồi... khoảnh khắc mà tất cả chúng ta đã chờ đợi suốt hành trình dài!",
        speaker: null, dialogue: null
      },
      {
        num: 3, title: "Mưa Pháo Hoa Confetti", sfx: "BÙM BÙM! TÁCH TÁCH!!",
        img: IMG.trophy, pos: "center center", zoom: 1.05,
        visual: "Cả đội đồng loạt nâng bổng chiếc Cúp lên trời! Hàng vạn mảnh giấy kim tuyến Confetti vàng óng bay ngợp trời!",
        caption: null, speaker: "Toàn đội ITK65", dialogue: "YEEEEEEEEEEAHHHHHHH!!!"
      },
      {
        num: 4, title: "Trang Sử Vàng Chói Lọi", sfx: "LẤP LÁNH!",
        img: IMG.trophy, pos: "center 20%", zoom: 1.35,
        visual: "Cận cảnh chiếc Cúp vô địch sáng loáng phản chiếu nụ cười rạng rỡ của những chàng trai IT mang số áo 65.",
        caption: "Từ những chàng sinh viên IT với những dòng code mỗi ngày, hôm nay các bạn đã viết nên một trang lịch sử vẻ vang!",
        speaker: null, dialogue: null
      }
    ]
  },
  {
    page: 20,
    fileSlug: "Trang_20_Tam_Anh_Lich_Su",
    title: "Tấm Ảnh Lịch Sử – Khắc Tên Vào Ngôi Vương",
    panels: [
      {
        num: 1, title: "Tấm Ảnh Tập Thể Vàng", sfx: "TÁCH TÁCH! (FLASH)",
        img: IMG.trophy, pos: "center center", zoom: 1.05,
        visual: "Đại cảnh chụp ảnh lưu niệm cả đội ITK65 trong màu áo xanh navy viền đỏ trắng, ngực đeo HCV quây quần bên chiếc Cúp vô địch.",
        caption: "Một tập thể – Một giấc mơ – Một ngôi vương!",
        speaker: null, dialogue: null
      },
      {
        num: 2, title: "Quả Bóng Chữ Ký", sfx: "TỎA SÁNG!",
        img: IMG.trophy, pos: "center 40%", zoom: 1.25,
        visual: "Cận cảnh logo UTC2, cờ Bộ môn CNTT và quả bóng thi đấu chi chít chữ ký kỷ niệm của tất cả thành viên.",
        caption: "Chiếc cúp đã có chủ! Vinh quang vĩnh viễn thuộc về ITK65!",
        speaker: null, dialogue: null
      },
      {
        num: 3, title: "Tung Hô Thầy Trò", sfx: "1... 2... 3... VÚT!!",
        img: IMG.huddle, pos: "center 30%", zoom: 1.25,
        visual: "Toàn đội tung Đội trưởng và Huấn luyện viên lên không trung giữa tiếng cười giòn giã và pháo hoa rực rỡ.",
        caption: null, speaker: "Tất cả", dialogue: "HOAN HÔ ITK65! TUYỆT VỜI LẮM ANH EM ƠI!!"
      },
      {
        num: 4, title: "Khẩu Hiệu Bất Diệt", sfx: "VANG DỘI ĐẤT TRỜI!!",
        img: IMG.cover, pos: "center 20%", zoom: 1.3,
        visual: "Khung tranh đại kết thúc: Toàn đội đồng thanh giơ nắm đấm về phía máy ảnh, ánh mắt rạng ngời tự hào vô bờ bến.",
        caption: "Không chỉ chinh phục trái bóng tròn, chúng ta đã cùng nhau chinh phục giới hạn của chính mình!",
        speaker: "Toàn đội ITK65 đồng thanh", dialogue: "ITK65 – CHIẾN ĐẤU HẾT MÌNH – VÔ ĐỊCH HẾT MÌNH!!"
      }
    ]
  }
];

function generatePageHtml(p) {
  const panelsHtml = p.panels.map(panel => {
    const dialogueHtml = panel.dialogue ? `
      <div class="speech-bubble-wrapper">
        <div class="manga-speech-bubble">
          <div class="speaker-tag">
            <span class="speaker-icon">👤</span>
            <span class="speaker-name">${panel.speaker}</span>
          </div>
          <div class="dialogue-text">"${panel.dialogue}"</div>
        </div>
      </div>
    ` : '<div class="bubble-spacer"></div>';

    const captionHtml = panel.caption ? `
      <div class="manga-caption-box">
        <div class="caption-tag">LỜI DẪN</div>
        <div class="caption-text">"${panel.caption}"</div>
      </div>
    ` : '';

    return `
      <div class="manga-panel">
        <div class="panel-top-bar">
          <div class="panel-index-badge">KHUNG 0${panel.num} • ${panel.title.toUpperCase()}</div>
          ${panel.sfx ? `<div class="panel-sfx">${panel.sfx}</div>` : ''}
        </div>
        
        <!-- Real Realistic Manga Artwork Scene -->
        <div class="panel-graphic-box">
          <img src="file:///${panel.img}" class="panel-real-img" style="object-position: ${panel.pos}; transform: scale(${panel.zoom || 1});" alt="Scene Action" />
          <div class="panel-overlay-vignette"></div>
        </div>

        <!-- Speech Bubble floating over character head -->
        ${dialogueHtml}

        <!-- Scene visual description text -->
        <div class="panel-story-desc">
          <strong>Hành động:</strong> ${panel.visual}
        </div>

        <!-- Manga Narrator Caption -->
        ${captionHtml}
      </div>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang ${p.page} - ${p.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:ital,wght@0,500;0,700;0,900;1,500;1,700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      width: 1200px;
      height: 1680px;
      background: #090d16;
      color: #f8fafc;
      font-family: 'Montserrat', sans-serif;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 8px solid #0f172a;
    }

    /* Page Header */
    .page-header {
      background: linear-gradient(90deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
      border: 2px solid #ef4444;
      border-radius: 8px;
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .badge-utc2 {
      background: #ef4444;
      color: #fff;
      font-family: 'Bangers', cursive;
      font-size: 20px;
      padding: 2px 10px;
      border-radius: 4px;
      letter-spacing: 1px;
    }
    .series-title {
      font-family: 'Oswald', sans-serif;
      font-size: 19px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #fff;
    }
    .series-sub {
      font-size: 11px;
      color: #fbbf24;
      font-weight: 700;
    }
    .header-right {
      text-align: right;
    }
    .page-num-badge {
      font-family: 'Bangers', cursive;
      font-size: 28px;
      color: #fbbf24;
      text-shadow: 2px 2px 0 #000;
      letter-spacing: 1px;
    }
    .page-title-badge {
      font-family: 'Oswald', sans-serif;
      font-size: 13px;
      color: #94a3b8;
      text-transform: uppercase;
    }

    /* 4-Panel 2x2 Grid */
    .panels-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 18px;
      flex: 1;
      margin: 18px 0;
    }

    /* Individual Panel */
    .manga-panel {
      background: #111827;
      border: 3px solid #334155;
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.4);
      position: relative;
      overflow: hidden;
    }

    .panel-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .panel-index-badge {
      background: #1e293b;
      color: #93c5fd;
      border: 1px solid #3b82f6;
      font-family: 'Oswald', sans-serif;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px;
      letter-spacing: 0.5px;
    }
    .panel-sfx {
      font-family: 'Bangers', cursive;
      font-size: 24px;
      letter-spacing: 1.5px;
      color: #fbbf24;
      text-shadow: 2px 2px 0 #b45309, -1px -1px 0 #000;
      transform: rotate(-6deg);
    }

    /* Real Graphic Box */
    .panel-graphic-box {
      border: 2px solid #1e293b;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 8px;
      height: 200px;
      background: #000;
      position: relative;
    }
    .panel-real-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }
    .panel-overlay-vignette {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      box-shadow: inset 0 0 30px rgba(0,0,0,0.7);
      pointer-events: none;
    }

    /* Speech Bubble */
    .speech-bubble-wrapper {
      margin: 6px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .manga-speech-bubble {
      background: #ffffff;
      color: #0f172a;
      border: 2.5px solid #000000;
      border-radius: 14px;
      padding: 8px 12px;
      width: 94%;
      position: relative;
      box-shadow: 3px 3px 0 rgba(0,0,0,0.85);
    }
    .manga-speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 36px;
      border-width: 9px 8px 0;
      border-style: solid;
      border-color: #fff transparent;
      display: block;
      width: 0;
    }
    .manga-speech-bubble::before {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 35px;
      border-width: 11px 9px 0;
      border-style: solid;
      border-color: #000 transparent;
      display: block;
      width: 0;
    }
    .speaker-tag {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 2px;
    }
    .speaker-name {
      font-family: 'Oswald', sans-serif;
      font-size: 11.5px;
      color: #dc2626;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .dialogue-text {
      font-size: 13.5px;
      font-weight: 800;
      line-height: 1.35;
      color: #000;
    }
    .bubble-spacer {
      height: 4px;
    }

    /* Story Description */
    .panel-story-desc {
      background: #090e17;
      border-left: 3px solid #3b82f6;
      padding: 6px 10px;
      font-size: 12px;
      color: #cbd5e1;
      line-height: 1.35;
      border-radius: 0 4px 4px 0;
      margin: 4px 0;
    }
    .panel-story-desc strong {
      color: #93c5fd;
    }

    /* Manga Caption Box */
    .manga-caption-box {
      background: #fef08a;
      color: #451a03;
      border: 2px solid #000000;
      border-radius: 4px;
      padding: 6px 10px;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.7);
      margin-top: 4px;
    }
    .caption-tag {
      font-family: 'Oswald', sans-serif;
      font-size: 10px;
      color: #9a3412;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .caption-text {
      font-size: 12px;
      font-style: italic;
      font-weight: 700;
      line-height: 1.35;
    }

    /* Page Footer */
    .page-footer {
      background: #0f172a;
      border-top: 2px solid #334155;
      padding: 8px 16px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11.5px;
      color: #94a3b8;
    }
    .footer-highlight {
      color: #fbbf24;
      font-weight: 700;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="page-header">
    <div class="header-left">
      <span class="badge-utc2">UTC2 MANGA</span>
      <div>
        <div class="series-title">Hành Trình Chinh Phục Ngôi Vương – ITK65</div>
        <div class="series-sub">Bộ Môn Công Nghệ Thông Tin – ĐH Giao Thông Vận Tải (Phân hiệu TP.HCM)</div>
      </div>
    </div>
    <div class="header-right">
      <div class="page-num-badge">TRANG ${p.page} / 20</div>
      <div class="page-title-badge">${p.title}</div>
    </div>
  </header>

  <!-- 4-Panel Grid -->
  <main class="panels-grid">
    ${panelsHtml}
  </main>

  <!-- Footer -->
  <footer class="page-footer">
    <div>⚽ Đồng phục: Thân xanh navy đậm • Tay áo Royal Blue • Cổ tim viền đỏ-trắng thể thao</div>
    <div class="footer-highlight">🏆 ITK65: CHIẾN ĐẤU HẾT MÌNH – VÔ ĐỊCH HẾT MÌNH!</div>
  </footer>
</body>
</html>`;
}

console.log('--- BẮT ĐẦU RENDER 20 TRANG MANGA VỚI HÌNH ẢNH 3D/ANIME CHÂN THỰC NHƯ ẢNH BÌA ---');
console.log('Thư mục lưu trữ:', downloadsDir);

for (let i = 0; i < pagesData.length; i++) {
  const p = pagesData[i];
  const htmlContent = generatePageHtml(p);
  const tempHtmlPath = path.join(tempHtmlDir, `${p.fileSlug}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  const outputPngPath = path.join(downloadsDir, `${p.fileSlug}.png`);
  console.log(`[${i + 1}/20] Đang render ảnh chân thực: ${p.fileSlug}.png...`);

  try {
    const cmd = `"${edgePath}" --headless=new --screenshot="${outputPngPath}" --window-size=1200,1680 "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;
    execSync(cmd, { stdio: 'ignore' });
    console.log(` -> Hoàn thành: ${outputPngPath}`);
  } catch (err) {
    console.error(` -> Lỗi tại trang ${p.page}:`, err.message);
  }
}

console.log('--- HOÀN TẤT RENDER TOÀN BỘ 20 TRANG MANGA NÂNG CẤP! ---');

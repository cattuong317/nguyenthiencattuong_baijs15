function tinhKetQua() {
  var diemChuan = document.getElementById("diem-chuan").value * 1;
  var diem1 = document.getElementById("diem-1").value * 1;
  var diem2 = document.getElementById("diem-2").value * 1;
  var diem3 = document.getElementById("diem-3").value * 1;
  var khuVuc = document.getElementById("khu-vuc").value;
  var doiTuong = document.getElementById("doi-tuong").value;

  var diemUuTien = 0;

  if (khuVuc === "A") {
    diemUuTien += 2;
  } else if (khuVuc === "B") {
    diemUuTien += 1;
  } else if (khuVuc === "C") {
    diemUuTien += 0.5;
  }

  if (doiTuong === "1") {
    diemUuTien += 2.5;
  } else if (doiTuong === "2") {
    diemUuTien += 1.5;
  } else if (doiTuong === "3") {
    diemUuTien += 1;
  }

  var diemTongKet = diem1 + diem2 + diem3 + diemUuTien;
  var ketQua = "";

  if (diemTongKet >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
    ketQua = "Bạn đã trúng tuyển";
  } else {
    ketQua = "Bạn đã rớt";
  }
  ketQua += "<br>Tổng số điểm đạt được: " + diemTongKet;
  document.getElementById("ket-qua").innerHTML = ketQua;
}

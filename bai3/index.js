function tinhThue() {
  var ten = document.getElementById("ho-ten").value;
  var tongThuNhap = document.getElementById("tong-thu-nhap").value * 1e6; // Chuyển sang đơn vị đồng
  var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value;
  var thue = 0;
  if (tongThuNhap > 0 && tongThuNhap <= 6e7) {
    thue = 0.05 * tongThuNhap;
  } else if (tongThuNhap > 6e7 && tongThuNhap <= 12e7) {
    thue = 0.1 * tongThuNhap;
  } else if (tongThuNhap > 12e7 && tongThuNhap <= 21e7) {
    thue = 0.15 * tongThuNhap;
  } else if (tongThuNhap > 21e7 && tongThuNhap <= 384e6) {
    thue = 0.2 * tongThuNhap;
  } else if (tongThuNhap > 384e6 && tongThuNhap <= 624e6) {
    thue = 0.25 * tongThuNhap;
  } else if (tongThuNhap > 624e6 && tongThuNhap <= 96e7) {
    thue = 0.3 * tongThuNhap;
  } else if (tongThuNhap > 96e7) {
    thue = 0.35 * tongThuNhap;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
    return;
  }

  var formatter = new Intl.NumberFormat("vn-VN");
  var tienThue = formatter.format(thue);

  var ketQua =
    "Họ tên: " + ten + "; Tiền thuế thu nhập cá nhân: " + tienThue + " VND";
  document.getElementById("ket-qua").innerHTML = ketQua;
}

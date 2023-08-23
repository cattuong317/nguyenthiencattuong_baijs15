function toggleInput() {
  var loaiKhachHang = document.getElementById("loai-khach-hang").value;
  var soKetNoiInput = document.getElementById("so-ket-noi");
  if (loaiKhachHang === "doanh-nghiep") {
    soKetNoiInput.style.display = "block";
  } else {
    soKetNoiInput.style.display = "none";
  }
}

function tinhHoaDon() {
  var maKhachHang = document.getElementById("ma-khach-hang").value;
  var loaiKhachHang = document.getElementById("loai-khach-hang").value;
  var soKetNoi = parseInt(document.getElementById("so-ket-noi").value) || 0;
  var soKenh = parseInt(document.getElementById("so-kenh").value) || 0;
  var phiXuLy = 0;
  var phiDichVuCoBan = 0;
  var thueKenhCaoCap = 0;
  var tongHoaDon = 0;

  if (loaiKhachHang === "nha-dan") {
    phiXuLy = 4.5;
    phiDichVuCoBan = 20.5;
    thueKenhCaoCap = 7.5 * soKenh;
  } else if (loaiKhachHang === "doanh-nghiep") {
    phiXuLy = 15;
    phiDichVuCoBan = 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0);
    thueKenhCaoCap = 50 * soKenh;
  }

  tongHoaDon = phiXuLy + phiDichVuCoBan + thueKenhCaoCap;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var ketQua =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>" +
    "Tổng hóa đơn: " +
    formatter.format(tongHoaDon);

  document.getElementById("ket-qua").innerHTML = ketQua;
}

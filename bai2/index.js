function tinhTienDien() {
  var ten = document.getElementById("ten").value;
  var soKwh = document.getElementById("so-kwh").value * 1;

  var tienDien = 0;
  if (soKwh <= 50) {
    tienDien = soKwh * 500;
  } else if (50 < soKwh && soKwh <= 100) {
    tienDien = 50 * 500 + (soKwh - 50) * 650;
  } else if (100 < soKwh && soKwh <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKwh - 100) * 850;
  } else if (200 < soKwh && soKwh <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100;
  } else if (soKwh > 350) {
    50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
    return;
  }

  var ketQua = `Tên người tiêu thụ: ${ten}<br>
                Số kWh tiêu thụ: ${soKwh}<br>
                Số tiền phải trả: ${tienDien} đồng`;
  document.getElementById("ket-qua").innerHTML = ketQua;
}

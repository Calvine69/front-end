function convertNumber() {
  const input = document.getElementById("inputNumber").value.trim();
  const base = parseInt(document.getElementById("inputBase").value);

  if (!input) {
    alert("Masukkan bilangan terlebih dahulu!");
    return;
  }

  // Validasi input sesuai basis
  const regexes = {
    2: /^[0-1]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/
  };

  if (!regexes[base].test(input)) {
    alert("Input tidak valid untuk basis " + base);
    return;
  }

  const decimal = parseInt(input, base);

  document.getElementById("decimal").textContent = decimal.toString(10);
  document.getElementById("binary").textContent = decimal.toString(2);
  document.getElementById("octal").textContent = decimal.toString(8);
  document.getElementById("hexadecimal").textContent = decimal.toString(16).toUpperCase();
}

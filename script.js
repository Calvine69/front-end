function convertNumber() {
  const input = document.getElementById("inputNumber").value.trim();
  const base = parseInt(document.getElementById("inputBase").value);

  if (!input) {
    alert("harus mengisi bilangan terlebih dahulu");
    return;
  }

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
  const desimal = parseInt(input, base);

  document.getElementById("desimal").textContent = desimal.toString(10);
  document.getElementById("biner").textContent = desimal.toString(2);
  document.getElementById("oktal").textContent = desimal.toString(8);
  document.getElementById("hexadesimal").textContent = desimal.toString(16).toUpperCase();
}

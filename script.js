function calcular() {
  let a = document.getElementById("vlA").value;
  let b = document.getElementById("vlB").value;
  let c = document.getElementById("vlC").value;

  // CALCULO DE DELTA
  let delta = b ** 2 - 4 * a * c;

  //  CALCULO DE BHASKARA
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  if (a == 0) {
    alert("Os três coeficientes não formam uma equação do segundo grau ");
    return;
  }
  document.querySelector('.equacao').innerHTML = `EQUAÇÃO: ${a}x² ${b}x ${c} = 0`
  if (delta < 0) {
    document.getElementById("delta").innerHTML = "Delta:" + delta;
    document.querySelector(".result-raiz").innerHTML = "A equação não possui raízes reais";
    
  }
  document.getElementById("delta").innerHTML = `Δ: (${b})² - 4*(${a})*(${c}) = ${delta}`;
  if (b > 0 ) {
   b = '+'+b
  }
  if (c>=0) {
   c = '+'+c
  }
  document.getElementById("x1").innerHTML = "X' : " + x1.toFixed(2);
  document.getElementById("x2").innerHTML = 'X" : ' + x2.toFixed(2);
  return;
}

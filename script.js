function calcular() {
    let a = document.getElementById('vlA').value
    let b = document.getElementById('vlB').value
    let c = document.getElementById('vlC').value

    // CALCULO DE DELTA
     let delta = b**2 - 4*a*c 
     
     //  CALCULO DE BHASKARA
     let x1 = (-b + Math.sqrt(delta))/(2*a)
     let x2 = (-b - Math.sqrt(delta))/(2*a)
     if (a = 0) {
        alert('O VALOR DE <strong>A</strong> NÃO PODE SER IGUAL A 0 ')
        return
     }
     if (x1 == NaN && x2 == NaN) {
        alert('A EQUAÇÃO NÃO POSSUI RAÍZES ')
     }
    
     console.log(delta)
     console.log(x1, x2)
     document.getElementById('x1').innerHTML = x1.toFixed(2)
     document.getElementById('x2').innerHTML = x2.toFixed(2)
       document.getElementById('delta').innerHTML = delta

}
/*
------------------------------------------------------------
  IMC                     Resultado
------------------------------------------------------------
  Menos do que 18,5       Abaixo do peso
  Entre 18,5 e 24,9       Peso normal
  Entre 25 e 29,9         Sobrepeso
  Entre 30 e 34,9         Obesidade grau 1
  Entre 35 e 39,9         Obesidade grau 2
  Mais do que 40          Obesidade grau 3
------------------------------------------------------------
*/


    const form = document.querySelector('#formulario');

    form.addEventListener('submit',function receberInfo (evento){
      evento.preventDefault();

      //-------------Calculo do IMC-------------
      const peso = document.getElementById('peso');
      const altura = document.getElementById('altura');
      const calculoImc = (Number(peso.value))/((Number(altura.value))*(Number(altura.value)));
      const imc = calculoImc.toFixed(2); 
      //----------------------------------------

      const result = document.getElementById('resultado');
        if (imc<18.5){
            result.innerHTML= `<p class="result">Seu IMC é ${imc} (Abaixo do peso)</p>`
        } else if (imc>=18.5 && imc<=24.9){
            result.innerHTML= `<p class="result">Seu IMC é ${imc} (Peso normal)</p>`
        } else if (imc>=25 && imc<=29.9){
          result.innerHTML= `<p class="result">Seu IMC é ${imc} (Sobrepeso)</p>`
        } else if (imc>=30 && imc<=34.9){
          result.innerHTML= `<p class="result">Seu IMC é ${imc} (Obesidade grau 1)</p>`
        } else if (imc>=35 && imc<=39.9){
          result.innerHTML= `<p class="result">Seu IMC é ${imc} (Obesidade grau 2)</p>`
        } else if (imc >=40){
          result.innerHTML= `<p class="result">Seu IMC é ${imc} (Obesidade grau 3)</p>`
        } else {
          result.innerHTML= `<p class="result-error">Informações Inválidas</p>`
        }
      }
    )
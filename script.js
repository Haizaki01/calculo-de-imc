function selectSex(sexo) {

  const homem = document.getElementById('homem');
  const mulher = document.getElementById('mulher');

  // CÁLCULO PARA MASCULINO !
  if (sexo == 'h') {

    homem.classList.add('homem-click');
    mulher.disabled = true;
  }

  if (sexo == 'f') {

    mulher.classList.add('mulher-click');
    homem.disabled = true;
  }
}

//CÁLCULO DE IMC PADRÃO IGNORANDO SEXO POR ENQUANTO

function calcula_imc() {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');
  const sexo = document.getElementById('sexo');
  const valor = (peso / Math.pow(altura, 2));


  const mapeamento = [
    [18.5, 'Você está abaixo do seu peso ideal!'],
    [18.6, 24.9, 'Seu peso está normal!'],
    [25.0, 29.9, 'Você está com sobrepeso!'],
    [30.0, 34.9, 'Obesidade Grau 1!'],
    [35.0, 39.9, 'Obesidade Grau 2!'],
    [40.0, Infinity, 'Obesidade Grau 3!']
];
    let mensagem = '';
    for (let [peso, msg] of mapeamento) {
      mensagem = msg;
      if (peso > valor) break;
    }
    resultado.innerHTML = mensagem;
  }

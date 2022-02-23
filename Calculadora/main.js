var res = document.getElementById('resultado')
var imc = document.getElementById('result')
res.innerText = ''
imc.innerText = ''

var operacao = ''

function inse(n){
	operacao += n
	res.innerText = operacao
}

function resul(){
	//var resultado =  eval(operacao)
  var resultado = ''
//operacao[0] == '+'
  if(operacao[0] == '+' || operacao[0] == '-' || operacao[0] == '*' || operacao[0] == '/' || operacao[0] == '.' || operacao == ''){
    resultado = `operação inválida`
  }else {
    resultado = eval(operacao)
  }
  res.innerText = `${resultado}`
  operacao = ''
}


function calcula(){
  var peso = document.getElementById('kl').value
  var altura = document.getElementById('altura').value
  var rimc = Math.round(peso / (altura**2))
  var rpeso = ''
  if(rimc < 20){
    rpeso = 'abaixo do peso'
  }else if(rimc >= 20 && rimc <= 24){
    rpeso = 'no peso ideal'
  }else if(rimc >= 25 && rimc <= 29){
    rpeso = 'acima do peso'
  }else if(rimc >= 30 && rimc <= 35){
    rpeso = 'com obesidade'
  }else if(rimc >= 36){
    rpeso = 'com super obesidade'
  }
  imc.innerText = `Seu imc é ${rimc}. Você está ${rpeso}`
}

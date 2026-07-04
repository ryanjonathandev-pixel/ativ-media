let nomes = []
let idades = []

const button2 = document.getElementById('atualizar');

button2.addEventListener('click', atualizar)

function atualizar() {

 let nome = document.getElementById('nome').value;
 let idade = Number(document.getElementById('idade').value);

 if (nome === "" || idade === "" || idade <= 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

nomes.push(nome);
idades.push(idade);

/* atualizar */

let lista = document.getElementById('lista');
lista.innerHTML = "";

/* composiçao e for */

for (let i = 0; i < nomes.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${nomes[i]} tem ${idades[i]} anos`;
  lista.appendChild(li);
}

}

const button = document.getElementById('calcular');

button.addEventListener('click', calcular)

function calcular() {
  let soma = 0
  for (let i = 0; i < idades.length; i++) {
    soma += idades[i];
  }
  let media = soma / idades.length;
  document.getElementById('resultado').innerHTML = `A média das idades é: ${media.toFixed(3)}`;
}
// lista agora virou GLOBAL
var minhaLista = [];
function add() {
	// cliente passa a ser variavel LOCAL
	var cliente = [];
	console.log('add()');

	// variavel LOCAL
	var nome = document.getElementById('inputNome').value;
	var fone = document.getElementById('inputFone').value;
	var email = document.getElementById('inputEmail').value;
	var endereco = document.getElementById('inputEndereco').value;

	cliente.push(nome);
	cliente.push(fone);
	cliente.push(email);
	cliente.push(endereco);
	console.log('Cliente: ', cliente);

	// metodo PUSH() adiciona um elemento no FINAL da lista
	minhaLista.push(cliente);
	// metodo UNSHIFT() adiciona um elemento no INICIO da lista
	// minhaLista.unshift(nome);

	console.log(minhaLista);
	list();
}

function remove() {
	console.log('remove()');

	// como remover um elemento de um array
	// metodo POP() remove um elemento no FINAL da lista
	minhaLista.pop();
	// metodo SHIFT() remove um elemento no INICIO da lista
	// minhaLista.shift();

	console.log(minhaLista);
	list();
}

function list() {
	console.log('list()');

	var lista = '<ul>';
	for (var row = 0; row < minhaLista.length; row++) {
		console.log('Row' + row + ': ' + minhaLista[row]);
		// antes de entrar no segunda FOR
		// criar uma var CELULA
		var celula = '';
		for (var col = 0; col < minhaLista[row].length; col++) {
			console.log('Col' + col + ': ' + minhaLista[row][col]);
			celula += ' - ' + minhaLista[row][col];
			// console.log(lista);
		}
		lista += '<li>' + celula + '</li>';
	}
	lista += '</ul>';

	document.getElementById('lista').innerHTML = lista;

	// let lista = '<ul>';
	// for (var row = 0; row < minhaLista.length; row++) {
	// 	console.log('Row' + row + ': ' + minhaLista[row]);
	// 	var celula = '';
	// 	for (var col = 0; col < minhaLista[row].length; col++) {
	// 		celula += minhaLista[row][col] + ' - ';
	// 	}
	// 	console.log('Celula: ' + celula);
	// 	lista += '<li>' + celula + '</li>';
	// }
	// lista += '</ul>';

	// let lista = '<ul>';
	// for (i = 0; i < minhaLista.length; i++) {
	// 	lista += '<li>' + minhaLista[i] + '</li>';
	// }
	// lista += '</ul>';

	// document.getElementById('lista').innerHTML = '<br>' + lista;

	// como criar uma LISTA html (ul e li) para apresentar
	// os elementos da nossa list (minhaLista)

	// como criar uma TABELA html (linhas e colunas) para apresentar
	// os elementos da nossa list (minhaLista)
}

function clear() {
	console.log('clear()');
	minhaLista = [];
}
function tabela(){
	var novaTabela = document.createElement("table");
	var cabecalho = document.createElement("thead");
var corpo = document.createElement("tbody");

tabela.appendChild(cabecalho);
tabela.appendChild(corpo);

document.getElementById("test").appendChild(tabela);
}
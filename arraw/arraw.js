var nomes = ['Joao', 'Ana', 'Maria', 'Antonio'];
// console.log(nomes);

// nome - telefone - email - endereco
var cliente1 = ['Joao', '99999-1111', 'joao@gmail.com', ' Rua A, 40 '];
var cliente2 = ['Ana', '99999-2222', 'ana@gmail.com', 'Rua A, 50'];
var cliente3 = ['Maria', '99999-3333', 'maria@gmail.com', 'Rua A, 60'];
var cliente4 = ['Antonio', '99999-4444', 'antonio@gmail.com', 'Rua A, 70'];
var cliente5 = ['Antonia', '99999-5555', 'antonia@gmail.com', 'Rua A, 80'];
// console.log(cliente1);

nomes: string = [];
nomes.push(cliente1);
nomes.push(cliente2);
nomes.push(cliente3);
nomes.push(cliente4);
nomes.push(cliente5);
nomes.push(cliente1);
nomes.push(cliente2);
nomes.push(cliente3);
nomes.push(cliente4);
nomes.push(cliente5);

console.log(nomes);
// qual elemento está na posicao [2][2]?
console.log(nomes[2][2])

for (var row = 0; row < nomes.length; row++) {
  console.log('Row' + row + ': ' + nomes[row]);
  for (var col = 0; col < nomes[row].length; col++){
    if (col === 2) {
      console.log('Col' + col + ' - Email: ' + nomes[row][col]);
    }
    
  }
}

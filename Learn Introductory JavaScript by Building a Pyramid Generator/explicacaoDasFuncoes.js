// 🔹 `let` e `const` são usados para declarar variáveis em JavaScript:

// `const` (constante) - Não pode ser reatribuída depois de inicializada.
const character = "#"; 

// `let` (variável mutável) - Pode ser alterada depois de declarada.
let result = "";

// `count` define o número de repetições na pirâmide
const count = 8;

// Criamos um array vazio chamado `rows`
const rows = [];

/*
🔹 `.push()` adiciona um elemento ao final de um array.
   Aqui, usamos um loop `for` para preencher o array `rows`
   com o caractere "#" repetido `count` vezes.
*/
for (let i = 0; i < count; i = i + 1) {
  rows.push(character); // Adiciona "#" ao final do array
}

/*
🔹 `for...of` percorre cada elemento do array `rows`.
   🔹 `+=` (concatenação) adiciona cada elemento à string `result`,
   formando uma linha de "#" do tamanho de `count`.
*/
for (const row of rows) {
  result += row;
}

// Exibe a string final no console
console.log(result);

/*
🔹 `.pop()` remove o último elemento do array.
   Isso pode ser usado para diminuir a pirâmide, por exemplo.
*/
rows.pop(); // Remove o último "#" do array

// Exibe o array `rows` atualizado no console
console.log(rows);

/*
🔹 `.repeat(n)` repete uma string `n` vezes.
   Uma alternativa ao loop seria:
   result = character.repeat(count);
   Isso gera o mesmo resultado de "########".
*/
console.log(character.repeat(count)); // Exib📌 Resumo das Funções
Método	O que faz?	Exemplo	Resultado
let	Declara uma variável que pode ser alterada	let x = 5; x = 10;	x agora vale 10
const	Declara uma constante (não pode ser reatribuída)	const y = 3; y = 4;	❌ Erro
.push()	Adiciona um elemento ao final do array	arr.push(7);	[1, 2, 7]
.pop()	Remove o último elemento do array	arr.pop();	[1, 2]
.repeat(n)	Repete uma string n vezes	"#".repeat(5);	"#####"
e "########"

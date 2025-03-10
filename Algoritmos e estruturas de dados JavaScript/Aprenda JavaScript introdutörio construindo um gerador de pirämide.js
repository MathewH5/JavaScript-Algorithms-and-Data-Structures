const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i+1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);


`let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
console.log(rows);
let popped = rows.pop();
console.log(popped);
console.log(rows);
let newRow = rows;
console.log(newRow);
let newPush = newRow.push("uai");
console.log(newPush);
console.log(newRow);

newPush = newRow.push("ok");
console.log(newPush);

console.log(newRow);
`
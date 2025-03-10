let character = 'Hello';
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

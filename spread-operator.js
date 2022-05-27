// spread operator
let list = [1, 2, 5];
let otherList = [3, 4];

let completeList = [1, 2, ...otherList, 5];

// o spread operator permite fazer uma copia de um objeto
// quando fazemos uma atribuição o js cria uma referencia e nao uma copia
let referenceList = completeList;
let copyList = [...completeList];

referenceList.push(6);
copyList.push(42);

console.log(
`Lista original ${completeList}
Lista referenciada ${referenceList}
Lista copiada ${copyList}`);
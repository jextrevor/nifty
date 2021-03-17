let expression = 'i';
expression = 'undefined'[5];
expression = [undefined + []][0][5];
expression = [[][0] + []][0][5];
expression = [[][0] + []][0][++[++[++[++[++[0][0]][0]][0]][0]][0]];
expression = [[][[]] + []][0][++[++[++[++[++[[]][0]][0]][0]][0]][0]];
expression = [[][[]]+[]][+[]][++[++[++[++[++[[]][+[]]][+[]]][+[]]][+[]]][+[]]];

console.log(expression);

// let expression2 = 'i';
// expression2 = 'Infinity'[3];
// expression2 = [Infinity + []][0][3];
// expression2 = [1e1000 + []][0][3];
// expression2 = [+'1e1000' + []][0][3];
// expression2 = [+[1 + 'e' + 1 + 0 + 0 + 0][0] + []][0][3];
// expression2 = [+[++[0][0] + 'undefined'[3] + 1 + [0][0] + [0][0] + [0][0]][0] + []][0][3];

// console.log(expression2);
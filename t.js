let expression = 't';
expression = 'Infinity'[6];
expression = [Infinity + ''][0][6];
expression = [1e1000 + ''][0][6];
expression = [+'1e1000' + ''][0][6];
expression = [+['1' + 'e' + '1' + '0' + '0' + '0'][0] + ''][0][6];
expression = [+[1 + 'e' + 1 + 0 + 0 + 0][0] + ''][0][6];
expression = [+[1 + 'undefined'[3] + 1 + 0 + 0 + 0][0] + ''][0][6];
expression = [+[1 + [undefined + ''][0][3] + 1 + 0 + 0 + 0][0] + ''][0][6];
expression = [+[1 + [[][''] + ''][0][3] + 1 + 0 + 0 + 0][0] + ''][0][6];
expression = [+[1 + [[][''] + ''][0][3] + [1] + [0] + [0] + [0]][0] + ''][0][6];
expression = [+[++[''][0] + [[][''] + ''][0][++[++[++[''][0]][0]][0]] + [++[''][0]] + [0] + [0] + [0]][0] + ''][0][++[++[++[++[++[++[''][0]][0]][0]][0]][0]][0]];
expression = [+[++[[]][0] + [[][[]] + []][0][++[++[++[[]][0]][0]][0]] + [++[[]][0]] + [0] + [0] + [0]][0] + []][0][++[++[++[++[++[++[[]][0]][0]][0]][0]][0]][0]];
expression = [+[++[[]][+[]]+[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]+[++[[]][+[]]]+[+[]]+[+[]]+[+[]]][+[]]+[]][+[]][++[++[++[++[++[++[[]][+[]]][+[]]][+[]]][+[]]][+[]]][+[]]];

console.log(expression);

// let expression2 = 't';
// expression2 = 'function find() { [native code] }'[4];
// expression2 = [[].find + []][0][4];
// expression2 = [[]['find'] + []][0][4];
// expression2 = [[]['f' + 'i' + 'n' + 'd'] + []][0][4];
// expression2 = [[]['undefined'[4] + 'undefined'[5] + 'undefined'[1] + 'undefined'[2]] + []][0][4];
// expression2 = [[][[undefined + []][0][4] + [undefined + []][0][5] + [undefined + []][0][1] + [undefined + []][0][2]] + []][0][4];
// expression2 = [[][[[][0] + []][0][4] + [[][0] + []][0][5] + [[][0] + []][0][1] + [[][0] + []][0][2]] + []][0][4];
// expression2 = [[][[[][0]+[]][0][++[++[++[++[0][0]][0]][0]][0]]+[[][0]+[]][0][++[++[++[++[++[0][0]][0]][0]][0]][0]]+[[][0]+[]][0][++[0][0]]+[[][0]+[]][0][++[++[0][0]][0]]]+[]][0][++[++[++[++[0][0]][0]][0]][0]];

// console.log(expression2);
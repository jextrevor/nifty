let expression = ' ';
expression = 'function find() { [native code] }'[8];
expression = 'function find() {\n    [native code]\n}'[8]; // (Firefox)
expression = [[].find + ''][0][8];
expression = [[]['find'] + ''][0][8];
expression = [[]['f' + 'i' + 'n' + 'd'] + []][0][8];
expression = [[]['undefined'[4] + 'undefined'[5] + 'undefined'[1] + 'undefined'[2]] + []][0][8];
expression = [[][[undefined + ''][0][4] + [undefined + ''][0][5] + [undefined + ''][0][1] + [undefined + ''][0][2]] + ''][0][8];
expression = [[][[[][''] + ''][0][4] + [[][''] + ''][0][5] + [[][''] + ''][0][1] + [[][''] + ''][0][2]] + ''][0][8];
expression = [[][[[][''] + ''][0][++[++[++[++[''][0]][0]][0]][0]] + [[][''] + ''][0][++[++[++[++[++[''][0]][0]][0]][0]][0]] + [[][''] + ''][0][++[''][0]] + [[][''] + ''][0][++[++[''][0]][0]]] + ''][0][++[++[++[++[++[++[++[++[''][0]][0]][0]][0]][0]][0]][0]][0]];
expression = [[][[[][[]] + []][0][++[++[++[++[[]][0]][0]][0]][0]] + [[][[]] + []][0][++[++[++[++[++[[]][0]][0]][0]][0]][0]] + [[][[]] + []][0][++[[]][0]] + [[][[]] + []][0][++[++[[]][0]][0]]] + []][0][++[++[++[++[++[++[++[++[[]][0]][0]][0]][0]][0]][0]][0]][0]];
expression = [[][[[][[]]+[]][+[]][++[++[++[++[[]][+[]]][+[]]][+[]]][+[]]]+[[][[]]+[]][+[]][++[++[++[++[++[[]][+[]]][+[]]][+[]]][+[]]][+[]]]+[[][[]]+[]][+[]][++[[]][+[]]]+[[][[]]+[]][+[]][++[++[[]][+[]]][+[]]]]+[]][+[]][++[++[++[++[++[++[++[++[[]][+[]]][+[]]][+[]]][+[]]][+[]]][+[]]][+[]]][+[]]];

console.log(expression);
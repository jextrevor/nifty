let expression = '+';
expression = '1e+100'[2];
expression = [1e100 + ''][0][2];
expression = [+['1' + 'e' + '1' + '0' + '0'][0] + ''][0][2];
expression = [+[1 + 'e' + 1 + 0 + 0][0] + ''][0][2];
expression = [+[1 + 'undefined'[3] + 1 + 0 + 0][0] + ''][0][2];
expression = [+[1 + [undefined + ''][0][3] + 1 + 0 + 0][0] + ''][0][2];
expression = [+[1 + [[][''] + ''][0][3] + [1] + [0] + [0]][0] + ''][0][2];
expression = [+[++[''][0] + [[][['']] + ['']][0][++[++[++[''][0]][0]][0]] + [++[''][0]] + [0] + [0]][0] + ['']][0][++[++[''][0]][0]];
expression = [+[++[[]][0] + [[][[[]]] + [[]]][0][++[++[++[[]][0]][0]][0]] + [++[[]][0]] + [0] + [0]][0] + [[]]][0][++[++[[]][0]][0]];
expression = [+[++[[]][+[]]+[[][[[]]]+[[]]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]+[++[[]][+[]]]+[+[]]+[+[]]][+[]]+[[]]][+[]][++[++[[]][+[]]][+[]]];

console.log(expression);
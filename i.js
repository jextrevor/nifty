let expression = 't';
expression = 'Infinity'[0];
expression = [Infinity + ''][0][0];
expression = [1e1000 + ''][0][0];
expression = [+'1e1000' + ''][0][0];
expression = [+['1' + 'e' + '1' + '0' + '0' + '0'][0] + ''][0][0];
expression = [+[1 + 'e' + 1 + 0 + 0 + 0][0] + ''][0][0];
expression = [+[1 + 'undefined'[3] + 1 + 0 + 0 + 0][0] + ''][0][0];
expression = [+[1 + [undefined + ''][0][3] + 1 + 0 + 0 + 0][0] + 
''][0][0];
expression = [+[1 + [[][''] + ''][0][3] + 1 + 0 + 0 + 0][0] + ''][0][0];
expression = [+[1 + [[][''] + ''][0][3] + [1] + [0] + [0] + [0]][0] + ''][0][0];
expression = [+[++[''][0] + [[][''] + ''][0][++[++[++[''][0]][0]][0]] + [++[''][0]] + [0] + [0] + [0]][0] + ''][0][0];
expression = [+[++[[]][0] + [[][[]] + []][0][++[++[++[[]][0]][0]][0]] + [++[[]][0]] + [0] + [0] + [0]][0] + []][0][0];
expression = [+[++[[]][+[]]+[[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]]+[++[[]][+[]]]+[+[]]+[+[]]+[+[]]][+[]]+[]][+[]][+[]];

console.log(expression);
let expression = 'e';
expression = 'undefined'[3];
expression = [undefined + ''][0][3];
expression = [[][''] + ''][0][3];
expression = [[][''] + ''][0][++[++[++[''][0]][0]][0]];
expression = [[][[]] + []][0][++[++[++[[]][0]][0]][0]];
expression = [[][[]]+[]][+[]][++[++[++[[]][+[]]][+[]]][+[]]];

console.log(expression);
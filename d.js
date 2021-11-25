let expression = 'd';
expression = 'undefined'[2];
expression = [undefined + ''][0][2];
expression = [[][''] + ''][0][2];
expression = [[][''] + ''][0][++[++[''][0]][0]];
expression = [[][[]] + []][0][++[++[[]][0]][0]];
expression = [[][[]]+[]][+[]][++[++[[]][+[]]][+[]]];

console.log(expression);

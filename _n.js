let expression = 'n';
expression = 'undefined'[1];
expression = [undefined + []][0][1];
expression = [[][0] + []][0][1];
expression = [[][0]+[]][0][++[0][0]];
expression = [[][+[]]+[]][+[]][++[+[]][+[]]];

console.log(expression);
let expression = 'f';
expression = 'undefined'[4];
expression = [undefined + []][0][4];
expression = [[][0] + []][0][4];
expression = [[][0]+[]][0][++[++[++[++[0][0]][0]][0]][0]];
expression = [[][+[]]+[]][+[]][++[++[++[++[+[]][+[]]][+[]]][+[]]][+[]]];

console.log(expression);
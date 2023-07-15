let expression = 'u';
expression = 'undefined'[0];
expression = [undefined + ''][0][0];
expression = [[][0] + ''][0][0];
expression = [[][0] + []][0][0];
expression = [[][+[]]+[]][+[]][+[]];

console.log(expression);
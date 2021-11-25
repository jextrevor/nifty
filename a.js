let expression = 'a';
expression = 'NaN'[1];
expression = [NaN + ''][0][1];
expression = [+undefined + ''][0][1];
expression = [+[][''] + []][0][++[''][0]];
expression = [+[][[]] + []][0][++[[]][0]];
expression = [+[][[]] + []][0][++[[]][+[]]];

console.log(expression);
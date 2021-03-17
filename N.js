let expression = 'N';
expression = 'NaN'[0];
expression = [NaN + []][0][0];
expression = [+undefined + []][0][0];
expression = [+[][0] + []][0][0];
expression = [+[][[]] + []][0][0];
expression = [+[][[]]+[]][+[]][+[]];

console.log(expression);
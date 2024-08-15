/*
if the declared value of variable is 33 then the o/p will be "number"

but if the declared value of variable is "33" which is in double quote then the output will be "string"
*/

let score = 33

console.log(typeof score); 
console.log(typeof(score));

/*
here comes the type-conversion
*/ 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);//this will print string if the value is "33asd"
console.log(valueInNumber);//and this will print NaN if the declared value is "33asd"


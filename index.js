alert("Calculate with Macsunny");
var operation = prompt("what operation do you intend running? Pick any of (+,-,*,/)");
var firstNumber = parseInt(prompt("Enter First figure"));
var secondNumber = parseInt(prompt("Enter Second figure"));
if(operation =="+") {var result = firstNumber+secondNumber;}
else if(operation =="-") {var result = firstNumber-secondNumber;}
else if(operation =="*") {var result = firstNumber*secondNumber;}
else if(operation =="/") {var result = firstNumber/secondNumber;}
else {alert ("invalid Operation");}
alert ("Your result is"+result);
let anotherOperation = alert ("refresh the page to run another operation or else close.");

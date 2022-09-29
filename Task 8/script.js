/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {}

Calculator.prototype.sum = (a, b) => a + b;
Calculator.prototype.subtraction = (a, b) => a - b;
Calculator.prototype.multiplication = (a, b) => a * b;
Calculator.prototype.division = (a, b) => a / b;

const calculator = new Calculator();

console.log(calculator);

/* JAVA SCRIPT TEACHER --------------------------------------------------- 
Created by Roger Oliveira <rogeroliveira84@gmail.com>
On 05/04/2019  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** STRATEGY PATTERN ** ---------------------------------------------------
It is a behavioural design pattern that allows encapsulation of alternative algorithms for a particular task. 
It defines a family of algorithms and encapsulates them in such a way that they are interchangeable at runtime without client interference or knowledge.

** EXPLAINING THIS SAMPLE ** ---------------------------------------------
This sample algorithm implements a Calc function that receives the operation by parameter and internally it will use that operation to provide the result.
You can see two methods (Add, Multiply) that when set to the instance of Calc it will use their logic in the main Calc function.

** OTHER JAVASCRIPT TECHNIQUES IN USE ** ---------------------------------

- Arrow Functions: new syntax for writing functions expressions
    e.g.:
    
    old way (before Ecma Script 6):
    var addOne = function(value) { return value++; }

    new way using Arrow Function:
    let addOne = value => value++;

    A much nicer and simpler way to create functions

- Rest/Spread Operators:   

    use case 1: add array values to other array:
    e.g.:

    let value = [4,5,6]
    let result = [1,2,3, ...value]
    result = [1,2,3,4,5,6] :) cool!

    use case 2: functions with dynamic number of parameters:
    e.g.:

    let values = [1,2]
    let sumAll = (...values) => values.reduce((previous, current) => previous + current, 0)
    let result = sumAll(...values)
    result = 3 :) cool!

*/
let Calc = function() {
    this.operation = '';
}

Calc.prototype = {
    setOperation: operation => { this.operation = operation },
    calculate: (...values) => this.operation.calculate(...values)
} 

let Add = function() {
    this.calculate = (...values) => values.reduce((previous, current) => previous + current, 0,)
}
let Multiply = function() {
    this.calculate = (...values) => values.reduce((previous, current) => previous * current, 1)
}

let main = () => {
    let values = [2, 2, 2];
    
    let add = new Add();
    let multiply = new Multiply();

    let calc = new Calc();

    calc.setOperation(add);
    console.log(`Added values: ${calc.calculate(...values)}`);

    calc.setOperation(multiply);
    console.log(`Multiplied values: ${calc.calculate(...values)}`);
}

// this will run the main method
main();

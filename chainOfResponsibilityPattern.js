/* JAVA SCRIPT TEACHER --------------------------------------------------- 
Created by Roger Oliveira <rogeroliveira84@gmail.com>
On 13/09/2019  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** CHAIN OF RESPONSIBILITY PATTERN ** ---------------------------------------------------
It is an object-oriented-design consisting of command objects and a series of processing objects.
You can create a chain of commands that will be passed to the next object in the chain.
** EXPLAINING THIS SAMPLE ** ---------------------------------------------
This sample algorithm implements an Operation class that has the commands: add and multiply, so it returns 
the object itself but accumulating the results in the value variable.

** OTHER JAVASCRIPT TECHNIQUES IN USE ** ---------------------------------
- Template literals (ES6): You can use multi-line strings and string interpolation features with them. 

    e.g.:

    const myName = 'Steve Jobs';
    const helloMessage = `Hello ${myName} have a nice day!`;
    console.log(helloMessage);

    output: 
      Hello Steve Jobs have a nice day!
*/

class Operation {
    constructor(initialValue = 0) {
        this.value = initialValue;
        return this;
    }
    default = () => this;

    add(value) {
        if (value) {
            this.value += value;
        }
        return this;
    }
	multiply(value) {
        if (value) {
            this.value *= value;
        }
        return this;
    }
    result = () => this.value;
}

const calc = new Operation();
console.log(`${calc.add(5).add(5).multiply(20).value}`);

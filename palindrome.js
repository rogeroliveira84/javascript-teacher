/* JAVA SCRIPT TEACHER --------------------------------------------------- 
Created by Roger Oliveira
On 05/08/2019  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** PALINDROME WORD ** ---------------------------------------------------
Palindrome: a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction.
Famous examples include Amore, Roma, A man, a plan, a canal: Panama and No ‘x’ in ‘Nixon’.
Composing literature in palindromes is an example of constrained writing.
The word “palindrome” was coined from the Greek roots palin (“again”) and dromos (“way, direction”) by the English writer Ben Jonson in the 17th century.

** EXPLAINING THIS EXAMPLE ** ---------------------------------------------
Passing two arrays one with only Palindrome words and the other only no palindrome words it will check each one and return an object saying if it is or
not a palindrome word.

** OTHER JAVASCRIPT TECHNIQUES IN USE ** ---------------------------------

- IIFF: (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

    use case: sum two numbers and immediately invoke the function
    e.g.:

    const result = ((a, b) => a + b)(1, 2);
    result = 3 (1 + 2) cool!

- REGEX: 

    use case: remove all numbers from a string
    e.g.:

    const text = 'Hello World 123!';
    const result = text.replace(/[0-9]+/, '') // this regex selects only numbers 0 to 9 and removes it
    result = 'Hello World !' :) cool!

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
const palindromes = ["ALULA", "ANANA", "CIVIC", "DEKED", "DELED", "DERED", "DEWED", "KAIAK", "KAYAK", "LEMEL", "LEVEL", "MADAM", "MALAM", "MINIM", "RADAR", "REFER", "ROTOR", "SAGAS", "SAMAS", "SEDES", "SELES", "SEMES", "SERES", "SEXES", "SHAHS", "SIMIS", "SIRIS", "SOLOS", "STATS", "STETS", "STOTS", "SULUS", "SUSUS", "TENET", "TOROT", "ARAARA", "ATAATA", "DEGGED", "DENNED", "HAJJAH", "HALLAH", "MALLAM", "MARRAM", "PULLUP", "REDDER", "SELLES", "SERRES", "SESSES", "SUCCUS", "TALLAT", "TERRET", "TIRRIT", "DEIFIED", "HADEDAH", "HALALAH", "REIFIER", "REPAPER", "REVIVER", "ROTATOR", "SEITIES", "SEMEMES", "ROTAVATOR"];
const notPalindromes = ["HOUSE", "BALL", "HELLO WORLD", "HEY THERE!"];

((...words) =>
    words.map(word => ({
        'word': word,
        'palindrome':
            (word =>
                // CheckPalindrome - Reverse string and compares with original
                (value => value === value.split('').reverse().join(''))
                    // Prepares Word - only lower case and removes special characters and spaces
                    (word.toLowerCase().replace(/[^a-z]+/gmi, ''))
            )(word)
    })))(...palindromes, ...notPalindromes);


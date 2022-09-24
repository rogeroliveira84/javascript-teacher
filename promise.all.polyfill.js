/* JAVA SCRIPT TEACHER --------------------------------------------------- 
Created by Roger Oliveira <rogeroliveira84@gmail.com>
On 24/09/2022  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** WHAT IS A POLYFILL ** ---------------------------------------------------
It is a piece of code the implements the features that you expect the browser to support natively.

** EXPLAINING THE Promise.all() function ** ---------------------------------------------
Te Promise.all function receives an array of promises and return a single promise that resolves to an array of the results.
It will only resolve once all promises in the array have been resolved. It will reject immediately upon any of the input promises rejecting and return the message/error.

** EXPLAINING THIS EXAMPLE ** ---------------------------------------------
This example algorithm implements a polyfill of the Promise.all() function, by applying the same behaviour using more compatible JavaScript implementations.
**
*/

const promiseAllPolyfill = async function(promises) {
  if (!promises) return [];
  const results = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(res => {
        // save the result and increment resolved count
        // it uses index for returning the results in same order as input promises order
        results[index] = res;
        resolvedCount++;

        // if all promises are resolved, return results
        if (resolvedCount === promises.length) {
          resolve(results);
        }
      })
        .catch(reject);
    });
  });
};

const sampleSumPromise = (a, b) => {
  if (a === null || b === null) throw new Error('Invalid params');
  return new Promise((resolve) => resolve(a + b));
};

const testCase1 = function() {
  // Output: "[2, 5, 6]"
  promiseAllPolyfill([
    sampleSumPromise(1, 1),
    sampleSumPromise(2, 2),
    sampleSumPromise(3, 3),
  ])
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

const testCase2 = function() {
  // Output: "Rejected Error"
  promiseAllPolyfill([
    sampleSumPromise(1, 1),
    sampleSumPromise(2, null),
    sampleSumPromise(1, 2),
  ])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));
};

testCase1();
testCase2();

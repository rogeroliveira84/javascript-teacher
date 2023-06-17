/* JAVA SCRIPT TEACHER --------------------------------------------------- 
Created by Roger Oliveira
On 24/09/2022  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** WHAT IS A POLYFILL ** ---------------------------------------------------
It is a piece of code the implements the features that you expect the browser to support natively.

** EXPLAINING THE Promise.all() function ** ---------------------------------------------
The Promise.all function receives an array of promises and return a single promise that resolves to an array of the results.
It will only resolve once all promises in the array have been resolved. It will reject immediately upon any of the input promises rejecting and return the message/error.

** EXPLAINING THIS EXAMPLE ** ---------------------------------------------
This example algorithm implements a polyfill of the Promise.all() function, by applying the same behaviour using more compatible JavaScript implementations.
*/

const promiseAllPolyfill = async (promises) => {
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
        // Reject the polyfill promise if any promise rejects
        .catch(reject);
    });
  });
};

const sampleSumPromise = async (a, b) => {
  if (!a || !b) { throw new Error('Invalid params'); }
  return new Promise((resolve) => resolve(a + b));
};

const expect = (result) => {
  return {
    toBe: (expected) => {
      if (result?.toString() === expected?.toString()) {
        console.log('Test Passed!');
        return;
      }
      console.log(`Test Failed! expected: ${expected}, but got: ${result}`);
    },
    toThrow: () => {
      if (typeof result !== 'function') {
        console.log('Test Failed! Expected a function to throw an error');
        return;
      }

      let errorCaught = false;
      try {
        result?.();
      } catch (err) {
        console.log(`Test Passed! Error caught: ${err}`);
        errorCaught = true;
      }
      if (errorCaught) {
        console.log('Test Failed! Did not throw expected error');
      }
    }
  }
}

const testCase1 = async () => {
  const params = [
    sampleSumPromise(1, 1),
    sampleSumPromise(2, 2),
    sampleSumPromise(3, 3),
  ];

  // Output: "[2, 5, 6]"
  const res1 = await promiseAllPolyfill(params);
  const res2 = await Promise.all(params);
  expect(res1).toBe(res2);
};

const testCase2 = async () => {
    const params = () => [
      sampleSumPromise(1, 1),
      sampleSumPromise(2, null),
      sampleSumPromise(1, 2),
    ];
  
    // Output: "Rejected Error"
    const res1 = await promiseAllPolyfill(params());
    const res2 = await Promise.all(params);

    expect(res1).toThrow();
    expect(res2).toThrow();
};

(async () => {
    testCase1();
    testCase2();  
})();

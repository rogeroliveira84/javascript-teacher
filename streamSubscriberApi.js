/* JAVA SCRIPT TEACHER ---------------------------------------------------
Created by Roger Oliveira
On 04/10/2022  - https://github.com/rogeroliveira84/javascript-teacher
--------------------------------------------------------------------------

** STREAM SUBSCRIBER ** ---------------------------------------------------
This example algorithm implements a Stream Subscriber API,
and when passed values through the push method, it returns an array of all the functions results based on these values as params.
*/
const Stream = function () {
  const subscribedItems = [];
  return {
    subscribe: (functionMethod) => {
      if (typeof(functionMethod) !== 'function') return;
      subscribedItems.push(functionMethod)
    },
    push: (values) => {
      if (Array.isArray(values)) {
        return subscribedItems.map(functions => {
          return values.map(value => functions?.(value))
        });
      }
      if (typeof(values) !== 'number') return;
      return subscribedItems.map(functions => functions?.(values))
    }
  }
}

const myStream = new Stream();
myStream.subscribe((value) => value * 1);
myStream.subscribe((value) => value * 2);
myStream.subscribe((value) => value * 3);

console.log('Pushing single number, returns an array of results.');
console.log(myStream.push(1));

console.log('Pushing array of numbers, returns an array of array of results.');
console.log(myStream.push([1,2,3]));

console.log('Pushing invalid value, returns undefined');
console.log(myStream.push(null));
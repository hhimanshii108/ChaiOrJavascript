// Immediately invoked function expression
//is a function that runs the moment it is invoked or called in the JavaScript event loop. 
//Having a function that behaves that way can be useful in certain situations. 
//IIFEs prevent pollution of the global JS scope.

(function fast(){// it is called named iife
    console.log("execute immediately")
})(); // it should always be end with a semicolon

(()=>{
    console.log("arrow function iffe")
})()
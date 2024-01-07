function add(n1, n2) {
    console.log(n1 + " + " + n2 + " = " + (n1 + n2));
}
function substract(n1, n2) {
    console.log(n1 + " - " + n2 + " = " + (n1 - n2));
}
function multiply(n1, n2) {
    console.log(n1 + " x " + n2 + " = " + (n1 * n2));
}
function divide(n1, n2) {
    console.log(n1 + " / " + n2 + " = " + (n1 / n2));
}
function operations(n1, n2, callback) {
    callback(n1, n2);
}
console.log("\n");
console.log("Using Callbacks: ");
operations(4, 2, add);
operations(4, 2, substract);
operations(4, 2, multiply);
operations(4, 2, divide);
console.log("\n");
function operation(num1, num2, callback) {
    return new Promise((resolve) => {
        callback(num1, num2);
    });
}
console.log("Using Promises \n");
operation(4, 2, add)
    .then(() => {
    console.log('Add Function');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
});
operation(4, 2, substract)
    .then(() => {
    console.log('Substract Function');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
});
operation(4, 2, multiply)
    .then(() => {
    console.log('Multiply Function');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
});
operation(4, 2, divide)
    .then(() => {
    console.log('Divide Function');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
});
export {};

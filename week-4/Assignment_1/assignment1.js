// Assignment 1: Callback Function
// Complete the function below to show a delayed result in console.

function delayedResult(n1, n2, delayTime, callback) {
    let answer = n1+n2;
    // multiplied the delay time by 1000 to simplify testing
    return setTimeout(function() {callback(answer)}, delayTime*1000)
}

delayedResult(4, 5, 3, function(result) {
    console.log(result);
});

delayedResult(-5, 10, 2, function(result) {
    window.alert(result);
});
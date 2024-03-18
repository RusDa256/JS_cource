function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (a + b > 10) {
            resolve("Успех");
        }
        else {
            reject("Ошибка");
        }
    });
}
var promise = sum(4, 7);
promise.then(
    function (result) { console.log("Fulfilled: " + result); }, 
    function (error) { console.log("Error: " + error); })
.catch(function (error) { })
.finally(function () { });

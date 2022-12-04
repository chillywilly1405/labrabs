/** ЗАДАЧА 55 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

 console.log("Function Declaration",firstFunction(2,5))
//Function Declaration (объявление функции) функции объявленные таким способом могут вызываться и до и после их объявления
function firstFunction(a, b) {
  return a + b
}
console.log("Function Declaration",firstFunction(5,5))

//Function Expression (функциональное выражение) при объявлении этим способом, функцию до 
// объявления вызвать будет невозможно, так как она не будет существовать. 
// А вот после объявления вызовется без проблем.
console.log("Function Expression, вызов до объявления", secondFunction(3,10))
// в выводе получим Cannot access 'secondFunction' before initialization
const secondFunction = function (a, b) {
  return a + b
}
console.log("Function Expression",secondFunction(5,10))

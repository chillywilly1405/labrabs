/** ЗАДАЧА 31 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

 addnprint = (Arr,newNumber) => {
    Arr.push(newNumber)
    console.log(Arr)
} 
generateNumberandcheck = (min, max,arr) => {
    do
        newNumber = Math.floor(Math.random() * (max - min) + max)
    while (arr.includes(newNumber))
}
const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
generateNumberandcheck(MIN,MAX,myNumbers)
addnprint(myNumbers,newNumber)

/** ЗАДАЧА 62 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

 const a = [1, 2, 3]

 // Напишите код здесь
 const b = a.slice()
 
 b.push('newElement')
 
 console.log(a)
 // [1, 2, 3]
 
 console.log(b)
 // [1, 2, 3, "newElement"]
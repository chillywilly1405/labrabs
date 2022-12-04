/** ЗАДАЧА 65 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

 let vowelsCount = 0
 const vowels = ['a', 'e', 'i', 'o', 'u']
 
 const str = 'Today is the best day of my life'
 
 // Напишите код здесь
 function countOfElement(array, element){
     let count = 0;
     var idx = array.indexOf(element);
     while (idx != -1) {
         idx = array.indexOf(element, idx + 1);
         count++
     }
     return count
 }
 for(let i in vowels) {
     vowelsCount += countOfElement(str, vowels[i])
 }

console.log(vowelsCount)
// 9

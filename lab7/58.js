/** ЗАДАЧА 58 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

 function square(a) {
  if(a == undefined) throw "Uncaught Error: Функция \"square\" не может быть вызвана без аргумента";
  console.log(a * a)
}

square(10)
// 100
try{
  square()
}
catch(error){
  console.log(error)
}
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

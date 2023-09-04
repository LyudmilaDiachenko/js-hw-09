// #1 У вас є масив, який містить числа. Необхідно знайти всі числа, які є парними і більшими
// за 10, і повернути їх у зворотньому порядку.
// Наприклад, масив: [5, 14, 8, 20, 3, 11, 17, 4]
// Відповідь: [20, 14]

const arrays = [5, 14, 8, 20, 3, 11, 17, 4]

const result = arrays.filter(e => (e > 10) && (e % 2 === 0)).reverse()
console.log(result)
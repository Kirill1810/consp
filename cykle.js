// for (let i = 0; i < 1; i = i + 0.1) {
//     console.log(i)
// }

// for (let i = 0; i < 5; i = i + 1) { 
//   console.log(i); 
// } 
 
// Як працює цикл: 
// 1 етап - запускаємо цикл, створюємо початкове значення let i = 0 
// 2 крок - перевіряємо умову на true, тобто і < 5, тобто 0 < 5 отримуємо true тому виконуємо те, що у фігурних дужках 
// 3 крок - і = і + 1, тобто і = 0 + 1, тобто і = 1 
// 4 крок - тепер в і лежить 1, переходимо до наступної ітерації(кола), та перевіряємо умову і < 5, тобто 1 < 5, в умові true, тому виконуємо те, що у фігурних дужках 
// 5 крок - і = і + 1, тобто і = 1 + 1, тобто і = 2 
// 6 крок - тепер в і лежить 2, переходимо до наступної ітерації(кола), та перевіряємо умову і < 5, тобто 2 < 5, в умові true, тому виконуємо те, що у фігурних дужках 
// 7 крок -  і = і + 1, тобто і = 2 + 1, тобто і = 3 
// 8 крок - тепер в і лежить 3, переходимо до наступної ітерації(кола), та перевіряємо умову і < 5, тобто 3 < 5, в умові true, тому виконуємо те, що у фігурних дужках 
// 9 крок - і = і + 1, тобто і = 3 + 1, тобто і = 4 
// 10 крок - тепер в і лежить 4, переходимо до наступної ітерації(кола), та перевіряємо умову і < 5, тобто 4 < 5, в умові true, тому виконуємо те, що у фігурних дужках 
// 11 крок -  і = і + 1, тобто і = 4 + 1, тобто і = 5 
// 12 крок - тепер в і лежить 5, переходимо до наступної ітерації(кола), та перевіряємо умову і < 5, тобто 5 < 5, в умові false, тому цикл зупиняється 
 
// for (let i = 5; i < 100000; i += 5) { 
//   console.log(i); 
// } 
 
// Порахуємо суму чисел від 10 до 50 
// let sum = 0; 
// for (let i = 10; i <= 50; i += 2) { 
//   sum = sum + i; 
// } 
// console.log(sum);






//цикл while 

//while (умова) { 

//інструкція виконакться каоле буде true в умові

//}

let i = 5;

// while ( i < 10 ) { 
//     console.log(i);
//     i += 1 
//   } 


//цикл do while 

let password; 

const savePassword = 12345;


do {
 
  password = prompt("ведіть пароль");
} while (password !== savePassword);


   

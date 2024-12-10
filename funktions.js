//спосіб створеня функцій function declaration
//створюемо фунцію в 6 рядку викликаемо

// function test  (){
//     console.log("це тест фунція")
// }
// test()



//створимо функцію яка рахуе суму чисел

// function calculatesAmount (a, b, c)   { //<<<<<=== ЦЕ ПАРАМЕТР В ДУШКАХ круглих
// const sum = a + b + c ;
// return sum 
// }

//  console.log( calculatesAmount(4, 5, 3))  

//  const sumNumbers = calculatesAmount(7, 8, 9);
//  console.log(sumNumbers)

//  alert(calculatesAmount(4, 5, 6))    //<<<<<===    аргументи це конкретні дані які передаемо при виклику функції в круглих дужках

 //параметир це зміні у круглих дужках   які приймають дані задані в ньому параметир робимо при створені функції

 //спосіб створеня функції 2 function ekspresion тобто фукцінональний вираз
 //це коли ми функцію записуемо у вираз 


//  const sumNumders1 = function (a, b) {
// return a + b 
//  }


//  console.log (sumNumders1 (1, 2))




// Зміна result створенна у блочній (lokal) області видимості доступна тільки у фігурних дужках

  //  у яких вона була створена; Поза фігурними дужками зміна result не буде доступна і буде 
  //помилка якщо до неї звернитсь

//  function calculatesAmount2 (a, b, c, d) { 
//     console.log (arguments)
//   let result = 1
// for(let i = 0; i < arguments.length; i++){
//     result = result * arguments[i]
// }
// console.log(result)
//     // const result = a * b * c * d;
//     return result;
//     }


//     console.log (calculatesAmount2 (1, 2))
//     console.log (calculatesAmount2 (1, 2, 3))
//     console.log (calculatesAmount2 (1, 2, 3, 4))




//     Напиши функцію яка повертає буль як результат перевірки числа на парність:

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
//  У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.



// апиши функцію яка повертає найбільше число в масиві:


// function findMaxNumber (maxNumders){
//   let max = 0
//   for (let i = 0; i < maxNumders.length; i++){
//     console.log(maxNumders[i])
//     if (max > maxNumders[i])
//     max = maxNumders[i];
//   }

//   return max;

// }
// let array = [1, 3, 2, 5, 4];

// let max = findMaxNumber(array);

// console.log(max); 


//Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).


function findSmallesNumber (findSmallNum)   { 
  let small = 16

  for (let i = 0; i < findSmallNum.length; i++){

      console.log(findSmallNum[i])

      if (small > findSmallNum[i])

     small = findSmallNum[i];
   
   return small
   }
   

  }

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2

// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


// arrow function це новий синтаксис функцій який робить їх коротшим

// function calculatesAmount (a, b, c)   { 
//  const sum = a + b + c ;
//  return sum 
//  }


// const calculatesAmount = (a, b, c) =>  { 
//  const sum = a + b + c ;
//  return sum 
//  //тут е return тому це функція з явним поверненям
//  }

 //скоротимо цю функцію і зробимо її е не явним поверненням

 const calculatesAmount = (a, b, c) => a + b + c   //функція з не явним поверненням бо немае ретурн 
 
 

 console.log( calculatesAmount(4, 5, 3))  

  const sumNumbers = calculatesAmount(7, 8, 9);


